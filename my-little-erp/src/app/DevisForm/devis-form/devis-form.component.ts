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

  constructor(private formBuilder: FormBuilder) { }

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
        Chance: ['', [Validators.required, Validators.email]],
        DateDeFaisabilite: ['', Validators.required]
      });
    }
  }

  onSubmit() {
    if (this.devisForm.status === 'INVALID') {
      console.log("erreur dans le form");
      this.novalid = true;
      this.errorMessage = "Veuillez vérifier les différents champs du formulaire, le mail doit être sous la forme de mail@mail.extension";
    }
    else {
      this.novalid = false;
      console.log(this.devisForm.status);

    }
    
  }

  resetForm(devisForm: FormGroup) {
    devisForm.reset();
  }

}
