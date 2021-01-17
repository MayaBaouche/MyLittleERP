import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommandeService } from '../service/commande.service';
import { CommandeRequestModel } from'../api-model/commande-request-model';
import { CommandeResponseModel } from '../api-model/commande-response-model';

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
  currentCommande: Observable<CommandeResponseModel>;
  updatedCommande : CommandeRequestModel; 

  novalid: boolean = false;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder, private service: CommandeService, private route: ActivatedRoute, public router: Router) {
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
      this.idCommande = +this.route.snapshot.paramMap.get('id');
      this.currentCommande = this.getCurrentCommande();
      this.commandeUpdateForm = this.formBuilder.group({
        Client: ['', Validators.required],
        Typologie: ['', Validators.required],
        Charge: ['', Validators.required],
        DebutDemande: ['', Validators.required],
        FinDemande: ['', Validators.required],
        Statut: ['', Validators.required],
        DateDeFaisabilite: ['', Validators.required]
      });
      this.currentCommande.subscribe(value => {
        this.commandeUpdateForm.patchValue({
          Client: value.client,
          Typologie : value.typologie,
          Charge : value.charge,
          DebutDemande : value.debutDemande,
          FinDemande : value.finDemande,
          Statut : value.statut,
          DateDeFaisabilite : value.dateDeFaisabilite
        });
      });
    }
    else {
      this.commandeForm = this.formBuilder.group({
        Client: ['', Validators.required],
        Typologie: ['', Validators.required],
        Charge: ['', Validators.required],
        DebutDemande: ['', Validators.required],
        FinDemande: ['', Validators.required],
        Statut: ['', Validators.required],
        DateDeFaisabilite: ['', Validators.required]
      });
    }
  }

  onSubmit() {
    if (this.commandeForm.status === 'INVALID') {
      this.novalid = true;
      this.errorMessage = "Veuillez vérifier les différents champs du formulaire";
    }
    else {
      this.commandeRequest = new CommandeRequestModel();
      this.commandeRequest.client = this.commandeForm.value.Client;
      this.commandeRequest.n = "";
      this.commandeRequest.typologie = this.commandeForm.value.Typologie;
      this.commandeRequest.charge = this.commandeForm.value.Charge;
      this.commandeRequest.debutDemande = this.commandeForm.value.DebutDemande;
      this.commandeRequest.finDemande = this.commandeForm.value.FinDemande;
      this.commandeRequest.statut = this.commandeForm.value.Statut;
      this.commandeRequest.dateDeFaisabilite = this.commandeForm.value.DateDeFaisabilite;
      this.novalid = false;
      console.log(this.commandeForm.status);
      this.service.CreateCommande(this.commandeRequest).subscribe( () => this.backToCommande());
    }
  }

  resetForm(commandeForm: FormGroup) {
    commandeForm.reset();
  }

  getCurrentCommande(): Observable<CommandeResponseModel> {
    return this.service.GetCommandeById(this.idCommande);
  }

  backToCommande() {
    this.router.navigate(['/commande-list']);
  }

  updateCommande(idCommande : string)
  {
    if (this.commandeUpdateForm.status === 'INVALID') {
      this.novalid = true;
      this.errorMessage = "Veuillez vérifier les différents champs du formulaire";
      return; 
    }
    else {
      this.updatedCommande = new CommandeRequestModel();
      this.updatedCommande.id = this.idCommande;
      this.updatedCommande.n = this.idCommande+"";
      this.updatedCommande.client = this.commandeUpdateForm.value.Client;
      this.updatedCommande.typologie = this.commandeUpdateForm.value.Typologie;
      this.updatedCommande.charge = this.commandeUpdateForm.value.Charge;
      this.updatedCommande.debutDemande = this.commandeUpdateForm.value.DebutDemande;
      this.updatedCommande.finDemande = this.commandeUpdateForm.value.FinDemande;
      this.updatedCommande.statut = this.commandeUpdateForm.value.Statut;
      this.updatedCommande.dateDeFaisabilite = this.commandeUpdateForm.value.DateDeFaisabilite;
      console.log(this.updatedCommande);
      this.service.UpdateCommande(this.updatedCommande, idCommande).subscribe( () => this.backToCommande());
    }
  }
}
