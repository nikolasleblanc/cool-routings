import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ListComponent } from "./list/list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { 
    path: 'about', 
    component: AboutComponent 
  },
  { 
    path: 'contact',      
    component: ContactComponent 
  },
  { 
    path: 'home',      
    component: HomeComponent 
  },
  { 
    path: 'list', 
    component: ListComponent, 
    data: { title: 'Heroes List' }
  },
  { 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { 
    path: '**', 
    component: PageNotFoundComponent 
  }
];


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ListComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
