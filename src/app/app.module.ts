import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { AppCustomPreloader } from "./custom-preloading.strategy";
import { appRoutes } from "./app.routes";
import { SharedModule } from "./modules/shared/shared.module";
import { ConfigService } from "./services/config.service";
import { HttpModule } from "@angular/http";

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
    }),
    HttpModule
  ],
  providers: [
    AppCustomPreloader
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
