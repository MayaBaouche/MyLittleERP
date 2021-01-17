import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DevisService } from '../../service/devis.service';
import { DevisRequestModel, } from'../../api-model/devis-request-model';
import { DevisResponseModel } from '../../api-model/devis-response-model';

@Component({
  selector: 'app-devis-form',
  templateUrl: './devis-form.component.html',
  styleUrls: ['./devis-form.component.css']
})

export class DevisFormComponent implements OnInit {

  devisForm: FormGroup;
  devisUpdateForm: FormGroup; 
  
  devisRequest: DevisRequestModel;
  currentMode: string = '';

  idDevis: number;
  currentDevis: Observable<DevisResponseModel>;
  updatedDevis : DevisRequestModel; 

  novalid: boolean = false;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder, private service: DevisService, private route: ActivatedRoute, public router: Router) {
  }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') == null) {
      this.currentMode = 'Nouveau';
    }
    else {
      this.currentMode = 'Consultation';
    }
    this.buildForm(this.currentMode);
  }

  buildForm(typeOfForm: string) {
    if (typeOfForm == 'Consultation') {
      this.idDevis = +this.route.snapshot.paramMap.get('id');
      this.currentDevis = this.getCurrentDevis();
      this.devisUpdateForm = this.formBuilder.group({
        Prospect: ['', Validators.required],
        Typologie: ['', Validators.required],
        Charge: ['', Validators.required],
        DebutDemande: ['', Validators.required],
        FinDemande: ['', Validators.required],
        Statut: ['', Validators.required],
        Chance: ['', [Validators.required]],
        DateDeFaisabilite: ['', Validators.required]
      });
      this.currentDevis.subscribe(value => {
        this.devisUpdateForm.patchValue({
          Prospect: value.prospect,
          Typologie : value.typologie,
          Charge : value.charge,
          DebutDemande : value.debutDemande,
          FinDemande : value.finDemande,
          Statut : value.statut,
          Chance : value.chance,
          DateDeFaisabilite : value.dateDeFaisabilite
        });
      });
    }
    else {
      this.devisForm = this.formBuilder.group({
        Prospect: ['', Validators.required],
        Typologie: ['', Validators.required],
        Charge: ['', Validators.required],
        DebutDemande: ['', Validators.required],
        FinDemande: ['', Validators.required],
        Statut: ['', Validators.required],
        Chance: ['', [Validators.required]],
        DateDeFaisabilite: ['', Validators.required]
      });
    }
  }

  onSubmit() {
    if (this.devisForm.status === 'INVALID') {
      this.novalid = true;
      this.errorMessage = "Veuillez vérifier les différents champs du formulaire";
    }
    else {
      this.devisRequest = new DevisRequestModel();
      this.devisRequest.prospect = this.devisForm.value.Prospect;
      this.devisRequest.n = "Opportunité N°";
      this.devisRequest.typologie = this.devisForm.value.Typologie;
      this.devisRequest.charge = this.devisForm.value.Charge;
      this.devisRequest.debutDemande = this.devisForm.value.DebutDemande;
      this.devisRequest.finDemande = this.devisForm.value.FinDemande;
      this.devisRequest.statut = this.devisForm.value.Statut;
      this.devisRequest.chance = this.devisForm.value.Chance;
      this.devisRequest.dateDeFaisabilite = this.devisForm.value.DateDeFaisabilite;
      this.novalid = false;
      console.log(this.devisForm.status);
      this.service.CreateDevis(this.devisRequest).subscribe( () => this.backToDevis());
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

  updateDevis(idDevis : string)
  {
    if (this.devisUpdateForm.status === 'INVALID') {
      this.novalid = true;
      this.errorMessage = "Veuillez vérifier les différents champs du formulaire";
      return; 
    }
    else {
      this.updatedDevis = new DevisRequestModel();
      this.updatedDevis.id = this.idDevis;
      this.updatedDevis.n = "Opportunité N°"+this.idDevis;
      this.updatedDevis.prospect = this.devisUpdateForm.value.Prospect;
      this.updatedDevis.typologie = this.devisUpdateForm.value.Typologie;
      this.updatedDevis.charge = this.devisUpdateForm.value.Charge;
      this.updatedDevis.debutDemande = this.devisUpdateForm.value.DebutDemande;
      this.updatedDevis.finDemande = this.devisUpdateForm.value.FinDemande;
      this.updatedDevis.statut = this.devisUpdateForm.value.Statut;
      this.updatedDevis.chance = this.devisUpdateForm.value.Chance;
      this.updatedDevis.dateDeFaisabilite = this.devisUpdateForm.value.DateDeFaisabilite;
      console.log(this.updatedDevis);
      this.service.UpdateDevis(this.updatedDevis, idDevis).subscribe( () => this.backToDevis());
    }
  }
}
