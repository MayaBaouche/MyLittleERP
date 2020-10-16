import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  oldSelectedId = "1";
  isSelected1 : boolean = true;
  isSelected2 : boolean = false;
  isSelected3 : boolean = false;
  isSelected4 : boolean = false;
  isSelected5 : boolean = false;

  onClickMenu( senderId){
    if(senderId == "li1" && ("li"+this.oldSelectedId) != senderId ){
      this.setNotSelected();
      this.oldSelectedId = "1";
      this.isSelected1 = true;
    }else  if(senderId == "li2" && ("li"+this.oldSelectedId) != senderId ){
      this.setNotSelected();
      this.oldSelectedId = "2";
      this.isSelected2 = true;
    } else  if(senderId == "li3" && ("li"+this.oldSelectedId) != senderId ){
      this.setNotSelected();
      this.oldSelectedId = "3";
      this.isSelected3 = true;
    } else  if(senderId == "li4" && ("li"+this.oldSelectedId) != senderId ){
      this.setNotSelected();
      this.oldSelectedId = "4";
      this.isSelected4 = true;
    } else  if(senderId == "li5" && ("li"+this.oldSelectedId) != senderId ){
      this.setNotSelected();
      this.oldSelectedId = "5";
      this.isSelected5 = true;
    } 

  }
  setNotSelected(){
    this.isSelected1 = false;
    this.isSelected2 = false;
    this.isSelected3 = false;
    this.isSelected4 = false;
    this.isSelected5 = false;
  }
}
