import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { LoginRoutingModule } from './login-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    NativeScriptCommonModule,NativeScriptUIDataFormModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LoginModule { }
