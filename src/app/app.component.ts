/** @format */

import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	interpolation: ['{{', '}}'],
})
export class AppComponent {
	window = window;

	onClick() {
		console.log('Main click');
	}

	onKeydown() {
		console.log('is Enter');
	}
}
