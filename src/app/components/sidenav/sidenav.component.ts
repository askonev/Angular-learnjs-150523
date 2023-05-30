import {Component} from '@angular/core';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
    isSidenavOpened = false;

    toggleSidenavOpened(): void {
        this.isSidenavOpened = !this.isSidenavOpened;
    }
}
