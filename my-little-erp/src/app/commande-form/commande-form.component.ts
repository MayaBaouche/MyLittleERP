import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommandeRequestModel } from '../api-model/commande-request-model';
import { CommandeResponseModel } from '../api-model/commande-response-model';
import { CommandeService } from '../service/commande.service';

@Component({
  selector: 'app-commande-form',
  templateUrl: './commande-form.component.html',
  styleUrls: ['./commande-form.component.css']
})
export class CommandeFormComponent implements OnInit {

  commandeForm: FormGroup;
  commandeUpdateForm: FormGroup; 
  
  commandeRequest: CommandeRequestModel;
  currentMode: string = '';

  idCommande: number;
  currentCommande: Observable<CommandeRequestModel>;
  updatedCommande : CommandeRequestModel; 

  novalid: boolean = false;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder, private service: CommandeService, private route: ActivatedRoute, public router: Router) {
  }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') == null) {
      this.currentMode = 'Nouvelle';
    }
    else {
      this.currentMode = 'Consultation';
    }
    this.buildForm(this.currentMode);
  }

  buildForm(typeOfForm: string) {
    if (typeOfForm == 'Consultation') {
      this.idCommande = +this.route.snapshot.paramMap.get('id');
      this.currentCommande = this.getCurrentDevis();
      this.commandeUpdateForm = this.formBuilder.group({
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
    else {
      this.commandeForm = this.formBuilder.group({
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
    if (this.commandeForm.status === 'INVALID') {
      this.novalid = true;
      this.errorMessage = "Veuillez vérifier les différents champs du formulaire, le mail doit être sous la forme de mail@mail.extension";
    }
    else {
      this.commandeRequest.Client = this.commandeForm.value.Client;
      this.commandeRequest.Typologie = this.commandeForm.value.Typologie;
      this.commandeRequest.Charge = this.commandeForm.value.Charge;
      this.commandeRequest.DebutDemande = this.commandeForm.value.DebutDemande;
      this.commandeRequest.FinDemande = this.commandeForm.value.FinDemande;
      this.commandeRequest.Statut = this.commandeForm.value.Statut;
      this.commandeRequest.DateDeFaisabilite = this.commandeForm.value.DateDeFaisabilite;
      this.novalid = false;
      console.log(this.commandeForm.status);
      this.service.CreateCommande(this.commandeRequest);
    }
  }

  resetForm(devisForm: FormGroup) {
    devisForm.reset();
  }

  getCurrentDevis(): Observable<CommandeResponseModel> {
    return this.service.GetCommandeById(this.idCommande);
  }

  backToDevis() {
    this.router.navigate(['/devis-list']);
  }

  updateDevis(idDevis : string) : Observable<CommandeResponseModel>
  {
    if (this.commandeUpdateForm.status === 'INVALID') {
      this.novalid = true;
      this.errorMessage = "Veuillez vérifier les différents champs du formulaire, le mail doit être sous la forme de mail@mail.extension";
      return; 
    }
    else {
      this.updatedCommande.Client = this.commandeUpdateForm.value.Client;
      this.updatedCommande.Typologie = this.commandeUpdateForm.value.Typologie;
      this.updatedCommande.Charge = this.commandeUpdateForm.value.Charge;
      this.updatedCommande.DebutDemande = this.commandeUpdateForm.value.DebutDemande;
      this.updatedCommande.FinDemande = this.commandeUpdateForm.value.FinDemande;
      this.updatedCommande.Statut = this.commandeUpdateForm.value.Statut;
      this.updatedCommande.DateDeFaisabilite = this.commandeUpdateForm.value.DateDeFaisabilite;
      return this.service.UpdateCommande(this.updatedCommande, idDevis); 
    }
  }
}
