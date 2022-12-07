import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';
@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  constructor(
    private funcionarioService: FuncionarioService,
  ) { }

  displayedColumns: string[] = ['id', 'nome', 'email', 'cpf', 'perfil', 'foto','cargo','editar','excluir'];
  dataSource: Funcionario[] = [];

  ngOnInit(): void {
    this.initializeTable()
    
  }

  public initializeTable(): void{
    this.funcionarioService.findAll().subscribe(funcionarios =>{
      this.dataSource = funcionarios
      console.log(this.dataSource[2])
    })
  }

  public delete(): void{

  }
}
