import {Component, ElementRef, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
    // @ViewChild('drawer')
    @ViewChild(MatDrawer, {read: MatDrawer})
    private readonly matDrawerComponent: MatDrawer | undefined;

    @ViewChild(MatDrawer, {read: ElementRef})
    private readonly matDrawerElementRef: ElementRef<HTMLElement> | undefined;

    toggleSidenavOpened() {
        // eslint-disable-next-line no-console
        console.log(this.matDrawerElementRef?.nativeElement);
        this.matDrawerComponent?.toggle();
    }
}
