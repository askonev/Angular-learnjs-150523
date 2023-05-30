import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IApplicationConfig} from '../../shared/application-config/application-config.interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
    @Input() applicationConfig: IApplicationConfig | null = null;

    // eslint-disable-next-line @angular-eslint/no-output-rename
    @Output('menu') menuClick = new EventEmitter<{clientX: number}>();

    onMenuClick(event: MouseEvent) {
        // eslint-disable-next-line no-console
        console.log('Menu click', event);
        this.menuClick.emit({clientX: event.clientX}); // Эммитим значение родителю
    }
}
