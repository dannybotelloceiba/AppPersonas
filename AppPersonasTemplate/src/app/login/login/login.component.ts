import { Component, ElementRef, ViewChild,OnInit } from "@angular/core";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import { Usuario } from '../model/usuario';
import { RadDataFormComponent } from "nativescript-ui-dataform/angular/dataform-directives";
import { RadDataForm } from "nativescript-ui-dataform";

@Component({
  moduleId: module.id,
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggingIn = true;
  user: Usuario =new Usuario('','');
  processing = false;
  private _text: string;
  formulario:RadDataForm;
  

  constructor(private page: Page, private routerExtensions: RouterExtensions) { 
    this.page.actionBarHidden = true;
     this.formulario= this.page.getViewById('formData') as RadDataForm;
  
   
  }

  ngOnInit(): void {
   
  }




submit() {
  this.formulario= this.page.getViewById('formData') as RadDataForm;
  if (this.formulario.hasValidationErrors())
  {
    this.alert('Por favor digite correctamente los datos de Usuario y contraseña');
  }
  else{
 
  this.processing = true;
  this.delay(3000).then(any=>{
        this.login();}
);
  }
}

login() {

          this.processing = false;
          this.routerExtensions.navigate(["/home"], { clearHistory: true });

}

// >> angular-dataform-property-validate-event
public onPropertyValidate(args) {
/*  let validationResult = true;

  if (args.propertyName === "password2") {
      const dataForm = args.object;
      const password1 = dataForm.getPropertyByName("password");
      const password2 = args.entityProperty;
      if (password1.valueCandidate !== password2.valueCandidate) {
          password2.errorMessage = "Passwords do not match.";
          validationResult = false;
      }
  }

  args.returnValue = validationResult;*/
}
// << angular-dataform-property-validate-event

public onPropertyValidated(args) {
 /* const propertyName = args.propertyName;
  const validatedValue = args.entityProperty.valueCandidate;
  const validationResult = args.entityProperty.isValid;

  this._text = "Validated!" + "\n" +
      "PropertyName: " + propertyName + "\n" +
      "Value: " + validatedValue + "\n" +
      "Result: " + validationResult;*/
}


get text() {
  return this._text;
}

alert(message: string) {
  return alert({
      title: "Error",
      okButtonText: "OK",
      message: message
  });
}

async delay(ms: number) {
  await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
}

get person(): Usuario {
  return this.user;
}
}


