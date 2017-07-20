import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { ConfigService } from "./app/services/config.service";

if (environment.production) {
  enableProdMode();
}

export function configServiceFactory(something){
  return new ConfigService(something);
}

export let ConfigServiceProvider = (something) => ({ 
  provide: ConfigService,
  useFactory: configServiceFactory(something),
  deps: [  ]
});

// import 'whatwg-fetch';

// fetch('assets/config.json')
//   .then(res => {
//     return res.json();
//   })
//   .then(json => {
//     platformBrowserDynamic().bootstrapModule(AppModule, {
//       providers: [
//         ConfigServiceProvider(json)
//       ]
//     });
//   });

platformBrowserDynamic().bootstrapModule(AppModule);


