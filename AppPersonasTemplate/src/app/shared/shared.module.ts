import { NgModule } from "@angular/core";
import { ActionBarComponent } from "./components/action-bar/action-bar.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";

@NgModule({
    imports: [NativeScriptCommonModule],
    declarations: [ActionBarComponent],
    exports: [ActionBarComponent]
})
export class SharedModule { }
