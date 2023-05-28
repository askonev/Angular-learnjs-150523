/** @format */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
	.bootstrapModule(AppModule) // Запустит стартовую сборку
	.catch((err) => console.error(err));
