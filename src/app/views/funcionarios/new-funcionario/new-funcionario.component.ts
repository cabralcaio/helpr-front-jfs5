import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargo';
import { Funcionario } from 'src/app/models/funcionario';
import { CargoService } from 'src/app/services/cargo.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { UploadService } from 'src/app/services/upload.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-new-funcionario',
  templateUrl: './new-funcionario.component.html',
  styleUrls: ['./new-funcionario.component.css']
})
export class NewFuncionarioComponent implements OnInit {

  public formNewFuncionario: FormGroup
  public isLoadUpload: boolean = false;
  private fotoUrl: string = "";

  public cargos: Cargo[] = [];

  constructor(
    formBuild: FormBuilder,
    private funcionarioService: FuncionarioService,
    private dialog: MatDialog,
    private router: Router,
    private uploadService: UploadService,
    private cargoService: CargoService
  ) { 
    this.formNewFuncionario = formBuild.group({
      nome: ['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required]],
      senha:['',[Validators.required]],
      cargo:['',[Validators.required]],
      capa:[""]
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
      funcionario.foto = this.fotoUrl
      console.log(funcionario.cargo.idCargo)
      console.log(funcionario.foto)
      this.funcionarioService.create(funcionario).subscribe(response =>{
        alert("Funcionario cadastrado com sucesso!");
        this.router.navigate(["/funcionarios"]);
      })
    }else{
      alert("Dados inválidos")
    }
  }

  public uploadFile(event: any): void {
    console.log("chegou no uploadTS")
    this.isLoadUpload = true;
    const file: File = event.target.files[0];
    this.uploadService.uploadFoto(file).subscribe(uploadResult  => {
      this.isLoadUpload = false;
      const storageReference = uploadResult.ref;
      const promiseFileUrl = storageReference.getDownloadURL();
      promiseFileUrl.then((fotoUrl: string) => {
        this.fotoUrl = fotoUrl;
      })
    });
  }

}
