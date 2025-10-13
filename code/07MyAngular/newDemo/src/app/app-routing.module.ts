import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { Component1Component } from './page1/component1/component1.component';
import { Component2Component } from './page2/component2/component2.component';
import { MyMenuComponent } from './menu/my-menu/my-menu.component';


const routes: Routes = [
  { path: '',redirectTo:'/page1', pathMatch: 'full' },
  { path: 'home', component: Component1Component },
  { path: 'page1', component: Component1Component },
  { path: 'page1/:id', component: Component2Component },
  { path: 'page1/:id', component: Component2Component },
  { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
