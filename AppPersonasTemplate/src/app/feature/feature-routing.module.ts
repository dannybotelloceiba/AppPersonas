import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { ListarEmpleadosComponent } from './empleados/listar-empleados/listar-empleados.component';


const routes: Routes = [

  { path: "", component: ListarEmpleadosComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class FeatureRoutingModule { }
