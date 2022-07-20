import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { Err404Component } from './err404/err404.component';
import { HomeComponent } from './home/home.component';
import { TheP1Component } from './the-p1/the-p1.component';
import { TheP2Component } from './the-p2/the-p2.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'p1', component: TheP1Component},
  {path:'p2', component: TheP2Component },
  {path: '**', pathMatch: 'full', component: Err404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
