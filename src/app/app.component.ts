import {Component} from '@angular/core';
import {applicationConfigMock} from './shared/application-config/application-config.mock';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    readonly applicationConfig = applicationConfigMock;

    isSidenavOpenedApp = false;

    onMenuClickApp(clientXobj: {clientX: number}) {
        // eslint-disable-next-line prettier/prettier
        // eslint-disable-next-line no-console
        console.log('Menu click event app.component lvl', clientXobj);
        this.isSidenavOpenedApp = !this.isSidenavOpenedApp;
    }
}
