import { Routes } from '@angular/router';

export const appRoutes: Routes = [
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