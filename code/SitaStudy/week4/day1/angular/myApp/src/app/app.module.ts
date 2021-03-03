import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { USAComponent } from './usa/usa.component';

import {UsaModuleModule} from './usa-module/usa-module.module';
import { BabaComponent } from './baba/baba.component';
import { SonComponent } from './son/son.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import {LoginService} from './shared/services/login.service';
import { TheNameDirective } from './shared/directives/the-name.directive';
import { DurationPipe } from './shared/pipes/duration.pipe';
import { TemformsComponent } from './temforms/temforms.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TestComponent,
    Test2Component,
    USAComponent,
    BabaComponent,
    SonComponent,
    LifecycleComponent,
    CompanyComponent,
    EmployeeComponent,
    TheNameDirective,
    DurationPipe,
    TemformsComponent,
    ReactiveFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UsaModuleModule,
    ReactiveFormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
