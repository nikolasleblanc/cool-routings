import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ListComponent } from "./list/list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomeComponent } from './home/home.component';
import { AppCustomPreloader } from "./custom-preloading.strategy";
import { appRoutes } from "./app.routes";
import { CounterService } from "./counter.service";
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { 
      // preloadingStrategy: PreloadAllModules 
      preloadingStrategy: AppCustomPreloader
    })
  ],
  providers: [
    AppCustomPreloader,
    CounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
