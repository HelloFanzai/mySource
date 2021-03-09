import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from "@angular/router"
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { USAComponent } from './usa/usa.component';

import { UsaModuleModule } from './usa-module/usa-module.module';
import { BabaComponent } from './baba/baba.component';
import { SonComponent } from './son/son.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginService } from './shared/services/login.service';
import { TheNameDirective } from './shared/directives/the-name.directive';
import { DurationPipe } from './shared/pipes/duration.pipe';
import { TemformsComponent } from './temforms/temforms.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component'
import { ProductsService } from './products.service';
import { OnlineShoppingComponent } from './online-shopping/online-shopping.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FashionComponent } from './fashion/fashion.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { LightingComponent } from './lighting/lighting.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { LoginStatusService } from "./login-status.service";
import { LoginAuthService } from './login-auth.service';
import { ContactComponent } from './contact/contact.component';
import { CanDeactivateGuardService } from './can-deactive-guard.service';
import { PopulationService } from './population.service';
import { IndiaComponent } from './india/india.component';





var myroutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:brandname', component: ProductsComponent },
]
var myroutes2 = RouterModule.forRoot(myroutes)

var myroutes2_1: Routes = [
  { path: "", component: OnlineShoppingComponent },
  {
    path: "electronics", component: ElectronicsComponent, canActivate: [LoginAuthService],
    children: [
      { path: "mobiles", component: MobilesComponent },
      { path: "laptops", component: LaptopsComponent }]
  },
  {
    path: "appliances", component: AppliancesComponent,
    children: [
      { path: "lighting", component: LightingComponent },
      { path: "furniture", component: FurnitureComponent }]
  },
  {
    path: "fashion", component: FashionComponent,
    children: [
      { path: "men", component: MenComponent },
      { path: "women", component: WomenComponent }]
  }];
var myroutes2_2 = RouterModule.forRoot(myroutes2_1);

var myroutes3: Routes = [   
  { path: "", component: HomeComponent },   
  { path: "home", component: HomeComponent, canDeactivate: [CanDeactivateGuardService] },   
  { path: "about", component: AboutComponent },   
  { path: "contact", component: ContactComponent } 
  ]; 
  var myroutes3_2 = RouterModule.forRoot(myroutes3); 




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
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    OnlineShoppingComponent,
    AppliancesComponent,
    ElectronicsComponent,
    FashionComponent,
    FurnitureComponent,
    LightingComponent,
    MobilesComponent,
    LaptopsComponent,
    MenComponent,
    WomenComponent,
    IndiaComponent,

  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    myroutes2,
    myroutes2_2,
    myroutes3_2,
    FormsModule,
    UsaModuleModule,
    ReactiveFormsModule
  ],
  providers: [ProductsService, LoginStatusService, LoginAuthService,CanDeactivateGuardService,PopulationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
