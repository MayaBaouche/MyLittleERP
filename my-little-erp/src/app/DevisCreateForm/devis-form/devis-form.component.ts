import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DevisRequestModel } from 'src/app/api-model/devis-request-model';

@Component({
  selector: 'app-devis-create-form',
  templateUrl: './devis-create-form.component.html',
  styleUrls: ['./devis-create-form.component.css']
})
export class DevisFormComponent implements OnInit {

  devisForm: FormGroup;
  devisRequest: DevisRequestModel;
  currentMode: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
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
    // appeler méthode service
  }

  resetForm(devisForm: FormGroup) {
    devisForm.reset();
  }

}
