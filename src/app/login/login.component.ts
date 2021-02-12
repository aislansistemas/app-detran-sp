import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  isExecutarSpinner: boolean = false;
  cpf: string = "";
  codigoAluno: number = null;
  errorValidationCpf = "";
  errorValidationCodigoAluno = null;

  constructor(
    private apiService: ApiServiceService,
    private alertController: AlertController
  ) { }

  ngOnInit() {}

  executarSpinner(executar: boolean): void{
    this.isExecutarSpinner = executar;
  }

  login(): void {
    this.executarSpinner(true);
    if(this.validarFormulario()) {
    
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
    if(this.codigoAluno == null) {
      this.errorValidationCodigoAluno = "Informe a senha!";
      erros++;
    }
    return erros == 0 ? true : false;
  }

}
