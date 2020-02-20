import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { FeatureRoutingModule } from './feature-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ListarEmpleadosComponent } from './empleados/listar-empleados/listar-empleados.component';
import { CrearEmpleadosComponent } from './empleados/crear-empleados/crear-empleados.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ListarEmpleadosComponent, CrearEmpleadosComponent],
  imports: [
    FeatureRoutingModule,
    NativeScriptCommonModule,
    SharedModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FeatureModule { }
