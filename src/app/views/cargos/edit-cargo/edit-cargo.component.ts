import { NgForm } from '@angular/forms';
import { CargoService } from 'src/app/services/cargo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Cargo } from 'src/app/models/cargo';

@Component({
  selector: 'app-edit-cargo',
  templateUrl: './edit-cargo.component.html',
  styleUrls: ['./edit-cargo.component.css']
})
export class EditCargoComponent implements OnInit {

  public cargo: Cargo = {
    nome: '',
    descricao: '',
    salario: '',
  }

  constructor(
    private route: ActivatedRoute,
    private cargoService: CargoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.inicializarCargo();

  }

  private inicializarCargo(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.cargoService.findById(id).subscribe(cargo => {
        this.cargo = cargo;
      })
    }
  }

  public update(formEdit: NgForm): void {
    if(formEdit.valid){
      this.cargoService.update(this.cargo).subscribe(() => {
        alert("Dados Editados com sucessor!");
        this.router.navigate(["/cargos"]);
      });
    } else {
      alert("Dados incorretos!")
    }
  }


}
