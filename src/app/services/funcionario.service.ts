import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Funcionario } from '../models/funcionario';

//task #14 foi realizada na task anterior #13

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {


  constructor(
    private http: HttpClient
  ) { }


  public findAll(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(`${API_CONFIG.baseUrl}/funcionarios`).pipe(
      catchError(error =>{
        alert("Erro ao buscar funcionarios.");
        console.log(error);
        return EMPTY;
      })
    )
  }
}
