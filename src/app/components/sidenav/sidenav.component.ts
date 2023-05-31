import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
    @Input() isSidenavOpenedChild = false;

    toggleSidenavOpened() {
        this.isSidenavOpenedChild = !this.isSidenavOpenedChild;
    }
}
