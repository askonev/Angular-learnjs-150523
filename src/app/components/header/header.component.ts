import {Component, Input} from '@angular/core';
import {IApplicationConfig} from '../../shared/application-config/application-config.interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
    // eslint-disable-next-line @angular-eslint/no-input-rename
    @Input('config') applicationConfig: IApplicationConfig | null = null;

    onMenuClick() {
        // eslint-disable-next-line no-console
        console.log('Menu click');
    }
}
