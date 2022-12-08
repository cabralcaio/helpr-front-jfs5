import { FuturoCandidato } from './../../../models/futuro-candidato';
import { FuturoCandidatoService } from './../../../services/futuro-candidato.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-futuros-candidatos',
  templateUrl: './futuros-candidatos.component.html',
  styleUrls: ['./futuros-candidatos.component.css']
})
export class FuturosCandidatosComponent implements OnInit {

  constructor(
    private futuroCandidatoService: FuturoCandidatoService
  ) { }

  displayedColumns: string[] = ['id', 'nome', 'email', 'descricao', 'setor','editar','excluir'];
  dataSource: FuturoCandidato [] = [];

  ngOnInit(): void {
    this.inicilizarCandidato();
  }

  public inicilizarCandidato(): void {
    this.futuroCandidatoService.findAll().subscribe(futuroCandidato => {
      this.dataSource = futuroCandidato;
    })
  }

  public deletar (idFuturoCandidato: string): void {
    this.futuroCandidatoService.deletarCandidato(idFuturoCandidato).subscribe(reponse => {
      alert("Candidato apagado!");
      this.inicilizarCandidato();
    })
  }

}
