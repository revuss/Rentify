import { Routes } from '@angular/router';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { LoginComponent } from './Auth/login/login.component';
import { authRedirectGuard } from './auth-redirect.guard';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    title: 'Rent property - Login',
    loadComponent: () =>
      import('./Auth/login/login.component').then((c) => c.LoginComponent),

    canActivate: [authRedirectGuard],
  },
  {
    path: '',
    title: 'Rentify - Home',
    component: HomePageComponent,
  },
  {
    path: 'register',
    title: 'Rentify - Register',
    loadComponent: () =>
      import('./Auth/sign-up/sign-up.component').then((c) => c.SignUpComponent),
    canActivate: [authRedirectGuard],
  },
  {
    path: 'my-properties',
    title: 'Rentify - My Properties',
    loadComponent: () =>
      import('./Auth/my-properties/my-properties.component').then(
        (c) => c.MyPropertiesComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'add-property',
    title: 'Rentify - Add Property',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./Auth/add-property/add-property.component').then(
        (c) => c.AddPropertyComponent
      ),
  },
  {
    path: 'load',
    title: 'Rentify - Add Property',
    loadComponent: () =>
      import('./Home/loadingscreen/loadingscreen.component').then(
        (c) => c.LoadingscreenComponent
      ),
  },
  {
    path: 'properties',
    title: 'Rentify - All Properties',
    loadComponent: () =>
      import(
        './Proporty/properties-main-page/properties-main-page.component'
      ).then((c) => c.PropertiesMainPageComponent),
    canActivate: [authGuard],
  },
  {
    path: 'properties/:id',
    title: 'Rentify - Property Detail',
    loadComponent: () =>
      import('./Slides/single-property/single-property.component').then(
        (c) => c.SinglePropertyComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'liked-properties',
    title: 'Rentify - Liked Property',
    loadComponent: () =>
      import('./Auth/liked-properties/liked-properties.component').then(
        (c) => c.LikedPropertiesComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: '**',
    title: 'Rentify - Not Found',
    loadComponent: () =>
      import('./Home/notfound/notfound.component').then(
        (c) => c.NotfoundComponent
      ),
  },
];
