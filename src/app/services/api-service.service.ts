import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../Models/Cliente';

const BASE_URL_api = "https://detran-system.herokuapp.com/api/";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  
  constructor(private http:HttpClient) { }

  consultarAutenticidadeCnh(cpf:string):Observable<Cliente> {
    let clienteResult = this.http.get<Cliente>(BASE_URL_api + `clienteapi?cpf=${cpf}&clienteEstado=1`); 
    return clienteResult;
  }
}
