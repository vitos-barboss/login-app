import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CredentialGuard } from './guards/credential.guard';
import { DetailsComponent } from './pages/details-page/details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './pages/login-page/login-page.module#LoginPageModule'
  },
  {
    path: 'main',
    canActivate: [CredentialGuard],
    loadChildren: './pages/main-page/main-page.module#MainPageModule'
  },
  {
    path: 'details/:id',
    canActivate: [CredentialGuard],
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
