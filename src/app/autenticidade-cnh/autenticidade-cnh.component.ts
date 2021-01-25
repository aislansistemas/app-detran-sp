import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autenticidade-cnh',
  templateUrl: './autenticidade-cnh.component.html',
  styleUrls: ['./autenticidade-cnh.component.scss'],
})
export class AutenticidadeCnhComponent implements OnInit {

  cpf: string = "";
  identificacao: string = "";
  dataNascimento: string = "";
  numeroRegistroCnh: string = "";
  renach: string = "";
  numeroEspelhoCnh: string = "";
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {}

  consultarAutenticidade() {
    if(this.cpf == null) {
      this.cpf = "Informe o CPF!";
    }
    if(this.identificacao == null) {
      this.identificacao = "Informe o numero do documento!";
    }
    if(this.dataNascimento == null) {
      this.dataNascimento = "Informe a data de nascimento!";
    }
    if(this.numeroRegistroCnh == null) {
      this.numeroRegistroCnh = "Informe o numero do registro da CNH!";
    }
    if(this.renach == null) {
      this.renach = "Informe o numero do renach!";
    }
    if(this.numeroEspelhoCnh == null) {
      this.numeroEspelhoCnh = "Informe o numero do espelho da CNH!";
    }
  }

}
