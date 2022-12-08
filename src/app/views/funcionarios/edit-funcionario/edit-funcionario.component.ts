import { CargoService } from 'src/app/services/cargo.service';
import { Funcionario } from 'src/app/models/funcionario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { NgForm } from '@angular/forms';
import { Cargo } from 'src/app/models/cargo';

@Component({
  selector: 'app-edit-funcionario',
  templateUrl: './edit-funcionario.component.html',
  styleUrls: ['./edit-funcionario.component.css']
})
export class EditFuncionarioComponent implements OnInit {

  public cargos: Cargo[] = [];

  public funcionario: Funcionario = {
    nome: '',
    email: '',
    cpf: '',
    senha: '',
    cargo: {
        idCargo: NaN,
        nome: "",
        descricao: "",
        salario: NaN
    }
  };


  constructor(
    private route: ActivatedRoute,
    private funcionarioService: FuncionarioService,
    private router: Router,
    private cargoService: CargoService
  ) { }

  ngOnInit(): void {
    this.inicializarFuncionario();
    this.initializeFieldCargo();
  }

  private inicializarFuncionario():void{
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.funcionarioService.findById(id).subscribe(funcionario => {
        this.funcionario = funcionario;
      })
    }
  }
  public initializeFieldCargo(): void {
    this.cargoService.findAll().subscribe(cargos =>{
      this.cargos = cargos;
    })
  }

  public update(formEdit: NgForm): void {
    if(formEdit.valid){
      this.funcionarioService.update(this.funcionario).subscribe(() => {
        console.log(this.funcionario.cargo.idCargo)
        alert("Dados editados com sucesso.");
        this.router.navigate(["/funcionarios"]);
      });
    } else {
      alert("Dados incorretos.")
    }
  }

}

