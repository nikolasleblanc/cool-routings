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

const appRoutes: Routes = [
  { 
    path: 'about', 
    // component: AboutComponent,
    loadChildren: './about/about.module#AboutModule',
    data: {
      preload: true
    }
  },
  { 
    path: 'contact',      
    // component: ContactComponent,
    loadChildren: './contact/contact.module#ContactModule'
  },
  { 
    path: 'home',      
    // component: HomeComponent,
    loadChildren: './home/home.module#HomeModule'
  },
  { 
    path: 'list', 
    // component: ListComponent, 
    loadChildren: './list/list.module#ListModule',
    data: { title: 'Heroes List' }
  },
  { 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { 
    path: '**', 
    // component: PageNotFoundComponent,
    loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule',
  }
];


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    /*ListComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    HomeComponent*/
  ],
  imports: [
    BrowserModule,
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
