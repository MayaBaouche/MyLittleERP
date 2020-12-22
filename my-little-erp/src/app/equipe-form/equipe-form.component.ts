import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {EquipeService} from "../service/equipe.service";
import {EquipeResponseModel,MemberResponseModel } from "../api-model/equipe-response-model";

@Component({
  selector: 'app-equipe-form',
  templateUrl: './equipe-form.component.html',
  styleUrls: ['./equipe-form.component.css']
})
export class EquipeFormComponent implements OnInit {
  // teamMembers : EquipeResponseModel[] = []; // variable pour test de la visu des équipes
  teamMembers : Observable<MemberResponseModel[]>;
  
  constructor(private EquipeService : EquipeService) { 
   /* // jeu de test pour la visualisation des équipes : à modifier equipe service + equiperesponse model
   
   let user1 = new MemberResponseModel(
      "Toto", "Charles", "2 rue geispo", "67100" , "Strass", "fr","123456","email@yopmail.com","cdp"
     );
     let user2 = new MemberResponseModel(
       "Toto2", "Charles2", "2 rue geispo2", "67100" , "Strass2", "fr2","1234562","email@yopmail.com2","cdp2"
      );
      this.teamMembers.push(new EquipeResponseModel(),new EquipeResponseModel());
      this.teamMembers[0].Members = [];
      this.teamMembers[1].Members = []
    this.teamMembers[0].Members.push(user1,user2);
    this.teamMembers[1].Members.push(user1,user2);*/
  
   
  
  }

  ngOnInit(): void {
    this.teamMembers = this.EquipeService.GetEquipe();
  }

}
