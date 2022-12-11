import { EditFuncionarioComponent } from './edit-funcionario/edit-funcionario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { NewFuncionarioComponent } from './new-funcionario/new-funcionario.component';

const routes: Routes = [
  { 
    path: '', 
    component: FuncionariosComponent 
  },
  {
    path:'new',
    component:NewFuncionarioComponent,
    title:"Helpr | Cadastrar Funcionário"
  },
  {
    path: 'edit/:id',
    component: EditFuncionarioComponent,
    title:"Helpr | Editar Funcionário"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuncionariosRoutingModule {}
