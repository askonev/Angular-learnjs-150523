/** @format */

import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
	readonly title = 'Angular-learnjs-150523';
	readonly iconSrc = 'https://cdn-icons-png.flaticon.com/512/234/234009.png';
}
