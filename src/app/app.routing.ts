import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreatePmeComponent } from './create-pme/create-pme.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeComponent } from './home/home.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { PmeDetailsComponent } from './pme-details/pme-details.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  
  { 
    path: 'pme/:id', component: PmeDetailsComponent  // Route pour les détails de la PME
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },
  { 
    path: 'login', component: LoginComponent
  },
  { 
    path: 'create-pme', component: CreatePmeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'user-sign-in', component: UserSignInComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
