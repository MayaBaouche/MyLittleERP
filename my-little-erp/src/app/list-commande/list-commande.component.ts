import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommandeResponseModel } from '../api-model/commande-response-model';
import { CommandeService } from '../service/commande.service';

@Component({
  selector: 'app-list-commande',
  templateUrl: './list-commande.component.html',
  styleUrls: ['./list-commande.component.css']
})
export class ListCommandeComponent implements OnInit {

  public commandes : Observable<CommandeResponseModel[]>;
  public isEmpty : boolean = true; 
  constructor(private service : CommandeService) { }

  ngOnInit(): void {
    this.commandes = this.service.GetCommande(); 
    if (this.commandes != null)
      this.isEmpty = false;
  }
}
