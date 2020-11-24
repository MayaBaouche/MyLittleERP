import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DevisRequestModel } from 'src/app/api-model/devis-request-model';
import { DevisService } from 'src/app/service/devis.service';

@Component({
  selector: 'app-devis-form',
  templateUrl: './devis-form.component.html',
  styleUrls: ['./devis-form.component.css']
})
export class DevisFormComponent implements OnInit {

  devisForm: FormGroup;
  devisRequest: DevisRequestModel;
  currentMode: string;
  novalid: boolean = false;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder, private service: DevisService) { }

  ngOnInit(): void {
    this.buildForm("other");
  }

  buildForm(typeOfForm: string) {
    if (typeOfForm == 'consulter'){

    }
    else {
      this.devisForm = this.formBuilder.group({
        Prospect: ['', Validators.required],
        Typologie: ['', Validators.required],
        Charge: ['', Validators.required],
        DebutDemande: ['', Validators.required],
        FinDemande: ['', Validators.required],
        Statut: ['', Validators.required],
        Chance: ['', Validators.required],
        DateDeFaisabilite: ['', Validators.required]
      });
    }
  }

  onSubmit() {
    if (this.devisForm.status === 'INVALID') {
      console.log("erreur dans le form");
      this.novalid = true;
      this.errorMessage = "Veuillez vérifier les différents champs du formulaire";
    }
    else {
      if (this.currentMode === 'create') {
        this.devisRequest.Prospect = this.devisForm.value.Prospect;
        this.devisRequest.Typologie = this.devisForm.value.Typologie;
        this.devisRequest.Charge = this.devisForm.value.Charge;
        this.devisRequest.DebutDemande = this.devisForm.value.DebutDemande;
        this.devisRequest.FinDemande = this.devisForm.value.FinDemande;
        this.devisRequest.Statut = this.devisForm.value.Statut;
        this.devisRequest.Chance = this.devisForm.value.Chance;
        this.devisRequest.DateDeFaisabilite = this.devisForm.value.DateDeFaisabilite;
        this.novalid = false;
        console.log(this.devisForm.status);
        this.service.CreateDevis(this.devisRequest);
      }
    }
    
  }

  resetForm(devisForm: FormGroup) {
    devisForm.reset();
  }

}
