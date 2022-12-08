import { FuturosCandidatosComponent } from './futuros-candidatos/futuros-candidatos.component';
import { EditClienteComponent } from './edit-cliente/edit-cliente.component';
import { NewClienteComponent } from './new-cliente/new-cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';

const routes: Routes = [
  {
    path: '',
    component: ClientesComponent
  },
  {
    path: 'new',
    component: NewClienteComponent
  },
  {
    path: 'edit/:id',
    component: EditClienteComponent
  },
  {
    path:'candidatos',
    component: FuturosCandidatosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
