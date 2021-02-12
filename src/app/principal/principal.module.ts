import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';
import { RouterModule } from '@angular/router';
import { MenuModule } from '../menu/menu.module';
import { MenuComponent } from '../menu/menu.component';



@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MenuModule
  ],
  exports: [
    PrincipalComponent
  ]
})
export class PrincipalModule { }
