import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDevisComponent } from './list-devis.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

export const routes:Routes = [    
  { 
    path: '',
    component: ListDevisComponent 
  }
];

@NgModule({
  declarations: [ListDevisComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ], 
  exports: [RouterModule]
})

export class ListDevisModule { }
