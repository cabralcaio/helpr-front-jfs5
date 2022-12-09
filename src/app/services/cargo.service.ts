import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Cargo } from '../models/cargo';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor(
    private http: HttpClient
  ) { }

  public findAll(): Observable<Cargo[]>{
    return this.http.get<Cargo[]>(`${API_CONFIG.baseUrl}/cargos`).pipe(
      catchError(error =>{
        alert("Erro ao buscar dados de cargos.");
        console.log(error);
        return EMPTY;
      })
    )
  }

  public findById(idCargo: string): Observable<Cargo> {
    return this.http.get<Cargo>(`${API_CONFIG.baseUrl}/cargos/${idCargo}`).pipe(
      catchError(error => {
        alert("Error ao buscar o cargo");
        console.error(error);
        return EMPTY;
      })
    )
  }

  public deletar(idCargo: string) {
    console.log(idCargo)
    return this.http.delete(`${API_CONFIG.baseUrl}/cargos/${idCargo}`).pipe(
      catchError(error => {
        alert("Error ao deletar cargo.");
        console.error(error);
        return EMPTY;
      })
    )
  }

  public update(cargo: Cargo): Observable<Cargo> {
    return this.http.put<Cargo>(`${API_CONFIG.baseUrl}/cargos/${cargo.idCargo}`, cargo).pipe(
      catchError(error => {
        alert("Error ao atulizar o cargo!");
        console.error(error);
        return EMPTY;
      })
    )
  }
  
}
