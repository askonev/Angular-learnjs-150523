import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
    @Input() isSidenavOpenedChild = false;

    @Output() isSidenavOpenedChildChange = new EventEmitter<boolean>();

    toggleSidenavOpened() {
        // this.isSidenavOpenedChild = !this.isSidenavOpenedChild;
        this.isSidenavOpenedChildChange.emit(!this.isSidenavOpenedChild);
    }
}
