/** @format */

import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	interpolation: ['{{', '}}'],
})
export class AppComponent {
	title = 'Angular-learnjs-150523';
	window = window;
}
