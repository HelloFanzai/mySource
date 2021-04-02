import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './study/server/server.component';
import { ServersComponent } from './study/servers/servers.component';
import { SuccessAlertComponent } from './study/success-alert/success-alert.component';
import { WarningAlertComponent } from './study/warning-alert/warning-alert.component';
import { Assignment1Component } from './study/assignment/assignment1/assignment1.component';
import { Assignment2Component } from './study/assignment/assignment2/assignment2.component';
import { StudyComponent } from './study/study.component';
import { MycodingComponent } from './mycoding/mycoding.component';
import { HomeComponent } from './mycoding/home/home.component';
import { AboutComponent } from './mycoding/about/about.component';
import { ContectComponent } from './mycoding/contect/contect.component';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const myRoutes: Routes = [
  { path: '', component: MycodingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contect', component: ContectComponent },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];
var myroutes = RouterModule.forRoot(myRoutes)

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    Assignment1Component,
    Assignment2Component,
    StudyComponent,
    MycodingComponent,
    HomeComponent,
    AboutComponent,
    ContectComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    myroutes,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
