import { EditCargoComponent } from './edit-cargo/edit-cargo.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargosComponent } from './cargos/cargos.component';

const routes: Routes = [
  { path: '', 
    component: CargosComponent,
    title:'Helpr | Cargos'
  },
  {
    path: 'edit/:id',
    component: EditCargoComponent,
    title:'Helpr | Editar Cargo'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargosRoutingModule { }
