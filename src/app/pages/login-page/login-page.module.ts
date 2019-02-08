import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginFormComponent } from './login/login-form/login-form.component';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    LoginPageRoutingModule
  ]
})
export class LoginPageModule { }
