import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { AppCustomPreloader } from "./custom-preloading.strategy";
import { appRoutes } from "./app.routes";
import { SharedModule } from "./modules/shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(appRoutes, { 
      // preloadingStrategy: PreloadAllModules 
      preloadingStrategy: AppCustomPreloader
    })
  ],
  providers: [
    AppCustomPreloader
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
