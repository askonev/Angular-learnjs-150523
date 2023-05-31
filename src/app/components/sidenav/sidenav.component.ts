import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
    // inputName - isSidenavOpenedChild
    @Input() isSidenavOpenedChild = false;

    // outputName = [inputName] + 'Change'
    @Output() isSidenavOpenedChildChange = new EventEmitter<boolean>();

    @ViewChild('drawer') private readonly matDrawerComponent: MatDrawer | undefined;

    toggleSidenavOpened() {
        this.isSidenavOpenedChildChange.emit(!this.isSidenavOpenedChild);
        this.matDrawerComponent?.toggle();
    }
}
