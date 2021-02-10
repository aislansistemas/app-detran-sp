import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Cliente } from '../Models/Cliente';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-autenticidade-cnh',
  templateUrl: './autenticidade-cnh.component.html',
  styleUrls: ['./autenticidade-cnh.component.scss'],
})
export class AutenticidadeCnhComponent implements OnInit {
  
  cliente: Cliente = new Cliente();
  fotoPerfilCliente = "https://detran-system.herokuapp.com/imagem-clientes/SP/" + this.cliente.imagemCliente.fotoPerfil;
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
  hasClienteResponse: boolean = false;
  isExecutarSpinner: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiServiceService,
    private alertController: AlertController
  ) { }

  ngOnInit() {}

  consultarAutenticidade():void {
    this.executarSpinner(true);
    if(this.validarFormulario()) {
      this.apiService.consultarAutenticidadeCnh(this.cpf).subscribe(
        dados => {
            this.cliente = dados;
            this.hasClienteResponse = true;
            console.log(this.cliente.imagemCliente.fotoPerfil);
        },
        error =>{
          this.executarSpinner(false);
          this.presentAlert(error.error);
        }
      );
    } else {
      this.executarSpinner(false);
    }
  }

  async presentAlert(mensagem: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
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

  executarSpinner(executar: boolean): void{
    this.isExecutarSpinner = executar;
  }

}
