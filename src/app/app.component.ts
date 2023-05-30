import {Component} from '@angular/core';
import {applicationConfigMock} from './shared/application-config/application-config.mock';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    readonly applicationConfig = applicationConfigMock;

    onMenuClick(clientx: number) {
        // eslint-disable-next-line prettier/prettier
        // eslint-disable-next-line no-console
        console.log('Menu click event app.component lvl', clientx);
    }
}
