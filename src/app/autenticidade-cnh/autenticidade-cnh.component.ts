import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

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

  errorValidationCpf = "";
  errorValidationIdentificacao = "";
  errorValidationDataNascimento = "";
  errorValidationNumeroRegistroCnh = "";
  errorValidationRenach = "";
  errorValidationNumeroEspelhoCnh = "";

  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiServiceService
  ) { }

  ngOnInit() {}

  consultarAutenticidade():void {
    if(this.validarFormulario()) {
      this.apiService.consultarAutenticidadeCnh(this.cpf).subscribe(
        dados => {
          console.log(dados);
        },
        error =>{
          console.log(error);
        }
      );
    }
  }

  validarFormulario() {
    var erros = 0;
    if(this.cpf == "") {
      this.errorValidationCpf = "Informe o CPF!";
      erros++;
    }
    if(this.identificacao == "") {
      this.errorValidationIdentificacao = "Informe o numero do documento!";
      erros++;
    }
    if(this.dataNascimento == "") {
      this.errorValidationDataNascimento = "Informe a data de nascimento!";
      erros++;
    }
    if(this.numeroRegistroCnh == "") {
      this.errorValidationNumeroRegistroCnh = "Informe o numero do registro da CNH!";
      erros++;
    }
    if(this.renach == "") {
      this.errorValidationRenach = "Informe o numero do renach!";
      erros++;
    }
    if(this.numeroEspelhoCnh == "") {
      this.errorValidationNumeroEspelhoCnh = "Informe o numero do espelho da CNH!";
      erros++;
    }

    return erros == 0 ? true : false;
  }

}
