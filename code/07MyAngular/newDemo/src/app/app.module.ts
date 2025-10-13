import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyMenuComponent } from './menu/my-menu/my-menu.component';
import { FormsModule } from '@angular/forms';
import { Component2Component } from './page2/component2/component2.component';
import { Component1Component } from './page1/component1/component1.component';

@NgModule({
  declarations: [
    AppComponent,
    MyMenuComponent,
    Component2Component,
    Component1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
