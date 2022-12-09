import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NewFuncionarioComponent } from './new-funcionario/new-funcionario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AvatarPipe } from 'src/app/pipes/avatar.pipe';
import { EditFuncionarioComponent } from './edit-funcionario/edit-funcionario.component';


@NgModule({
  declarations: [
    FuncionariosComponent,
    NewFuncionarioComponent,
    AvatarPipe,
    EditFuncionarioComponent

  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    
   
  ]
})
export class FuncionariosModule { }
