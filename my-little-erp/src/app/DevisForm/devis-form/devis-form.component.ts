import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DevisRequestModel } from 'src/app/api-model/devis-request-model';
import { DevisService } from 'src/app/service/devis.service';
import { DevisResponseModel } from '../../api-model/devis-response-model';

@Component({
  selector: 'app-devis-form',
  templateUrl: './devis-form.component.html',
  styleUrls: ['./devis-form.component.css']
})
export class DevisFormComponent implements OnInit {

  devisForm: FormGroup;
  devisRequest: DevisRequestModel;
  currentMode: string = '';

  idDevis: number;
  currentDevis: Observable<DevisResponseModel>;

  novalid: boolean = false;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder, private service: DevisService, private route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    if (+this.route.snapshot.paramMap.get('id') == null) {   
      this.currentMode = 'creation'; 
    }
    else {          
      this.currentMode = 'consultation';
    }    
    this.buildForm(this.currentMode);
  }

  buildForm(typeOfForm: string) {
    if (typeOfForm == 'consultation') {
      this.idDevis = +this.route.snapshot.paramMap.get('id');
      this.currentDevis = this.getCurrentDevis();
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
      this.novalid = true;
      this.errorMessage = "Veuillez vérifier les différents champs du formulaire, le mail doit être sous la forme de mail@mail.extension";
    }
    else {
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

  resetForm(devisForm: FormGroup) {
    devisForm.reset();
  }

  getCurrentDevis(): Observable<DevisResponseModel> {
    return this.service.GetDevisById(this.idDevis);
  }

  backToDevis() {
    this.router.navigate(['/devis-list']);
  }

}
