import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommandeRequestModel } from 'src/app/api-model/commande-request-model';
import { CommandeService } from 'src/app/service/commande.service';

@Component({
  selector: 'app-commande-form',
  templateUrl: './commande-form.component.html',
  styleUrls: ['./commande-form.component.css']
})
export class CommandeFormComponent implements OnInit {


  commandeForm: FormGroup;
  commandeRequest: CommandeRequestModel;
  currentMode: string;
  novalid: boolean = false;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder, private service: CommandeService) { }

  ngOnInit(): void {
    this.buildForm("other");
  }

  buildForm(typeOfForm: string) {
    if (typeOfForm == 'consulter'){

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
      console.log("erreur dans le form");
      this.novalid = true;
      this.errorMessage = "Veuillez vérifier les différents champs du formulaire";
    }
    else {
      if (this.currentMode === 'create') {
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
    
  }

  resetForm(commandeForm: FormGroup) {
    commandeForm.reset();
  }

}
