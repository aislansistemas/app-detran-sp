import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutenticidadeCnhComponent } from './autenticidade-cnh.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AutenticidadeCnhComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [AutenticidadeCnhComponent]
})
export class AutenticidadeCnhModule { }
