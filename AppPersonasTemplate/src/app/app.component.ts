import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { UIService } from "./shared/services/ui.service";
import { Subscription } from "rxjs";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild(RadSideDrawerComponent, {static: false}) drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;
    private _drawerSub: Subscription;

    constructor(private uiService: UIService, private changeDetectorRef: ChangeDetectorRef) {}

    ngOnInit(): void {
        this._drawerSub = this.uiService.drawer.subscribe(() => {
            if(this.drawer){
                this.drawerComponent.sideDrawer.toggleDrawerState();
            }
        });
    }

    ngAfterViewInit(): void {
        this.drawer = this.drawerComponent.sideDrawer;
        this.drawerComponent.sideDrawer;
        this.changeDetectorRef.detectChanges();
    }

    ngOnDestroy(): void {
        if (this._drawerSub) {
            this._drawerSub.unsubscribe();
        }
    }

    tapDrawer(){
        this.uiService.activarDrawer();
    }
}
