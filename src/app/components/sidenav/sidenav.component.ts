import {Component, ElementRef, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
    @ViewChild(MatDrawer, {static: false})
    private readonly matDrawerComponent: MatDrawer | undefined;

    @ViewChild('test', {static: false})
    private readonly test: ElementRef | undefined;

    isView = false;

    toggleSidenavOpened() {
        // eslint-disable-next-line no-console
        console.log('toggleSidenavOpened', this.test);

        this.isView = !this.isView;
        this.matDrawerComponent?.toggle();
    }
}
