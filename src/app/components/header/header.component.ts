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
    @Output() menuClickOutput = new EventEmitter<{clientX: number}>();

    onMenuClickHeader(event: MouseEvent) {
        // eslint-disable-next-line no-console
        console.log('Menu click', event);
        this.menuClickOutput.emit({clientX: event.clientX}); // Эммитим значение родителю
    }
}
