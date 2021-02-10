import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutenticidadeCnhComponent } from './autenticidade-cnh.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BrMaskerModule } from 'br-mask';



@NgModule({
  declarations: [AutenticidadeCnhComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BrMaskerModule
  ],
  exports: [AutenticidadeCnhComponent]
})
export class AutenticidadeCnhModule { }
