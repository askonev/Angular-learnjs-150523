import {
    Component,
    ContentChild,
    OnInit,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
    // @Input() set listTemplate(template: TemplateRef<unknown>) {
    //     this.insertListTemplate(template);
    // }

    @ViewChild(MatDrawer, {static: true})
    private readonly matDrawerComponent!: MatDrawer;

    @ViewChild('listViewpotr', {read: ViewContainerRef, static: true})
    private readonly listViewpotr!: ViewContainerRef;

    // @ContentChild(MatList, {static: true})
    // private readonly matList!: MatList;

    @ContentChild('listTemplate', {static: true})
    private readonly listTemplate!: TemplateRef<unknown>;

    ngOnInit(): void {
        this.insertListTemplate(this.listTemplate);
    }

    // ngOnChanges({listTemplate}: SimpleChanges): void {
    //     if (listTemplate) {
    //         this.insertListTemplate();
    //     }
    // }

    private insertListTemplate(listTemplate: TemplateRef<unknown>) {
        this.listViewpotr.createEmbeddedView(listTemplate);
        // eslint-disable-next-line no-console
        console.log(this.listViewpotr);
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

    // isView = true;

    toggleSidenavOpened() {
        // eslint-disable-next-line no-console
        // console.log('toggleSidenavOpened', this.test);

        // this.isView = !this.isView;
        // eslint-disable-next-line no-console
        // console.log(this.matList);
        this.matDrawerComponent?.toggle();
    }
}
