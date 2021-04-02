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
   ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
