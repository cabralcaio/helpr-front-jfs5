import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { DetailsComponent } from 'src/app/components/details/details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {


  constructor(
    private funcionarioService: FuncionarioService,
    private dialog: MatDialog
  ) { }

  displayedColumns: string[] = ['id', 'nome', 'email', 'cpf', 'perfil', 'foto','cargo','editar','excluir','detalhes'];
  dataSource: Funcionario[] = [];

  ngOnInit(): void {
    this.initializeTable()
    
  }

  public initializeTable(): void{
    this.funcionarioService.findAll().subscribe(funcionarios =>{
      this.dataSource = funcionarios;
    })
  }

  public delete(id: string): void{
    this.funcionarioService.deletefuncionario(id).subscribe(response => {
      alert("apagado");
      this.initializeTable();
  })
}
public openDetails(funcionario:Funcionario): void {
  this.dialog.open(DetailsComponent, {
    width: "400px",
    data: funcionario
  });
}
}

