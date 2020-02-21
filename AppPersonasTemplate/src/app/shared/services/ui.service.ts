import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UIService {

    private _drawer = new BehaviorSubject<void>(null);

    get drawer(){
        return this._drawer.asObservable();
    }

    activarDrawer() {
        this._drawer.next();
    }

    constructor() { }
}
