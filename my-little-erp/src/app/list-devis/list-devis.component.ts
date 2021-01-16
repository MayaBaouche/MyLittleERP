import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DevisResponseModel } from '../api-model/devis-response-model';
import { DevisService } from '../service/devis.service';

@Component({
  selector: 'app-list-devis',
  templateUrl: './list-devis.component.html',
  styleUrls: ['./list-devis.component.css']
})
export class ListDevisComponent implements OnInit {

  public devis : Observable<DevisResponseModel[]>;
  public isEmpty : boolean = true; 
  constructor(private service : DevisService) { }

  ngOnInit(): void {
    this.devis = this.service.GetDevis(); 
    if (this.devis != null)
      this.isEmpty = false;
  }
}
