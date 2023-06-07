import {Component, Input, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
    @Input() set listTemplate(template: TemplateRef<unknown>) {
        this.insertListTemplate(template);
    }

    @ViewChild(MatDrawer, {static: true})
    private readonly matDrawerComponent: MatDrawer | undefined;

    @ViewChild('listViewpotr', {read: ViewContainerRef, static: true})
    private readonly listViewpotr!: ViewContainerRef;

    // ngOnChanges({listTemplate}: SimpleChanges): void {
    //     if (listTemplate) {
    //         this.insertListTemplate();
    //     }
    // }

    private insertListTemplate(listTemplate: TemplateRef<unknown>) {
        this.listViewpotr.createEmbeddedView(listTemplate);
    }

    // @ViewChild('test', {static: false})
    // private readonly test: ElementRef | undefined;

    // @ViewChild('testStatic', {static: true})
    // private readonly testStatic: ElementRef | undefined;

    // ngOnInit(): void {
    //     // eslint-disable-next-line no-console
    //     console.log('OnInit', this.test);
    //     // eslint-disable-next-line no-console
    //     console.log('OnInit', this.testStatic);
    // }

    // ngAfterViewInit(): void {
    //     // eslint-disable-next-line no-console
    //     console.log('AfterViewInit sidenav', this.test);
    // }

    isView = true;

    toggleSidenavOpened() {
        // eslint-disable-next-line no-console
        // console.log('toggleSidenavOpened', this.test);

        // this.isView = !this.isView;
        this.matDrawerComponent?.toggle();
    }
}
