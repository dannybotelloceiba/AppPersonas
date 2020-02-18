import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';


@NgModule({
  declarations: [],
  imports: [
    CoreRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CoreModule { }
