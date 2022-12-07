import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargo';
import { Funcionario } from 'src/app/models/funcionario';
import { CargoService } from 'src/app/services/cargo.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-new-funcionario',
  templateUrl: './new-funcionario.component.html',
  styleUrls: ['./new-funcionario.component.css']
})
export class NewFuncionarioComponent implements OnInit {

  public formNewFuncionario: FormGroup

  public cargos: Cargo[] = [];

  constructor(
    formBuild: FormBuilder,
    private funcionarioService: FuncionarioService,
    private router: Router,
    private cargoService: CargoService
  ) { 
    this.formNewFuncionario = formBuild.group({
      nome: ['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required]],
      senha:['',[Validators.required]],
      cargo:['',[Validators.required]]
    })
  }
 
  ngOnInit(): void {
    this.initializeFieldCargo()
  }

  public initializeFieldCargo(): void {
    this.cargoService.findAll().subscribe(cargos =>{
      this.cargos = cargos;
    })
  }

  public create():void{
    if(this.formNewFuncionario.valid){
      const funcionario: Funcionario = this.formNewFuncionario.value;
      this.funcionarioService.create(funcionario).subscribe(response =>{
        alert("Funcionario cadastrado com sucesso!");
        this.router.navigate(["/funcionarios"]);
      })
    }else{
      alert("Dados inválidos")
    }
  }
}
