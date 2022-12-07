import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-new-funcionario',
  templateUrl: './new-funcionario.component.html',
  styleUrls: ['./new-funcionario.component.css']
})
export class NewFuncionarioComponent implements OnInit {

  public formNewFuncionario: FormGroup

  constructor(
    formBuild: FormBuilder,
    private funcionarioService: FuncionarioService,
    private router: Router
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
