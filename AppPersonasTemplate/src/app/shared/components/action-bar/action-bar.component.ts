import { Component, OnInit, Input } from '@angular/core';
import { isAndroid, Page } from 'tns-core-modules/ui/page'
import { RouterExtensions } from 'nativescript-angular/router';
import { UIService } from '../../services/ui.service';

declare var android: any;

@Component({
    selector: 'ns-action-bar',
    templateUrl: './action-bar.component.html',
    styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {

    @Input() title: string;

    constructor(private page: Page, private router: RouterExtensions, private uiService: UIService) { }

    ngOnInit(): void {
    }

    get canGoBack() {
        return this.router.canGoBack();
    }

    onGoBack() {
        this.router.backToPreviousPage();
    }

    onLoadedActionBar() {
        if (isAndroid) {
            const androidToolbar = this.page.actionBar.nativeView;
            const backButton = androidToolbar.getNavigationIcon();
            if (backButton) {
                backButton.setColorFilter(android.graphics.Color.parseColor("#ffffff"), (<any>android.graphics).PorterDuff.Mode.SRC_ATOP);
            }
        }
    }

    get isAndroid() {
        return isAndroid;
    }

    activarDrawer(){
        this.uiService.activarDrawer();
    }
}
