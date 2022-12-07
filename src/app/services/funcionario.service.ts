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

  public create(funcionario: Funcionario): Observable<Funcionario>{
    const data = {
      nome: funcionario.nome,
      email: funcionario.email,
      cpf: funcionario.cpf,
      senha: funcionario.senha,
      idCargo: funcionario.cargo.idCargo,
      foto: funcionario.foto
    }
    return this.http.post<Funcionario>(`${API_CONFIG.baseUrl}/funcionarios`, data).pipe(
      catchError(error =>{
        alert("Erro ao cadastrar novo funcionário.");
        console.log(error);
        return EMPTY;
      })
    )
  }
}
