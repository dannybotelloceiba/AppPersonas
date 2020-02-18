import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { FeatureRoutingModule } from './feature-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';


@NgModule({
  declarations: [],
  imports: [
    FeatureRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FeatureModule { }
