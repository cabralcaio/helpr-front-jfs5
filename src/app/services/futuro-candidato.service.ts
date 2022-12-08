import { API_CONFIG } from './../config/api.config';
import { FuturoCandidato } from './../models/futuro-candidato';
import { catchError, EMPTY, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuturoCandidatoService {

  constructor(
    private http: HttpClient
  ) { }


  public findAll(): Observable<FuturoCandidato[]> {
    return this.http.get<FuturoCandidato[]>(`${API_CONFIG.baseUrl}/candidatos`).pipe(
      catchError(error => {
        alert("Error ao buscar Futuro Candidato!");
        console.error(error);
        return EMPTY;
      })
      );
  }

  public deletarCandidato(idFuturoCandidato: string) {
    return this.http.delete(`${API_CONFIG.baseUrl}/candidatos/${idFuturoCandidato}`).pipe(
      catchError(error => {
        console.error(error);
        return EMPTY;
      })
    )
  }

}
