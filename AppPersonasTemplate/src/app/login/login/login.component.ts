import { Component, ElementRef, ViewChild,OnInit } from "@angular/core";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import { Usuario } from '../model/usuario';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggingIn = true;
  user: Usuario;
  processing = false;
  usuario: string;
  clave:string;
  @ViewChild("clave", {static: false}) password: ElementRef;


  constructor(private page: Page, private routerExtensions: RouterExtensions) { 
    this.page.actionBarHidden = true;
    this.user = new Usuario();
   
  }

  ngOnInit(): void {
  }


  toggleForm() {
    this.isLoggingIn = !this.isLoggingIn;
}

submit() {
 /* if (!this.user.usuario || !this.user.clave) {
      this.alert("Please provide both an email address and password.");
      return;
  }*/

  this.processing = true;
  this.delay(3000).then(any=>{
   
    if (this.isLoggingIn) {
        this.login();}
});
 
}

login() {
/*  this.userService.login(this.user)
      .then(() => {*/
          this.processing = false;
          this.routerExtensions.navigate(["/home"], { clearHistory: true });
    /*  })
   /*   .catch(() => {
          this.processing = false;
          this.alert("Unfortunately we could not find your account.");
      });*/
}

focusPassword() {
  this.password.nativeElement.focus();
}


alert(message: string) {
  return alert({
      title: "APP NAME",
      okButtonText: "OK",
      message: message
  });
}

async delay(ms: number) {
  await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
}

}
