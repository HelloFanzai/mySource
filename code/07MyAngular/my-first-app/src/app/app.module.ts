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
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './study2/theShopListApp/header/header.component';
import { Study2Component } from './study2/study2.component';
import { RecipesComponent } from './study2/theShopListApp/recipes/recipes.component';
import { RecipeListComponent } from './study2/theShopListApp/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './study2/theShopListApp/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './study2/theShopListApp/recipes/recipe-detail/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './study2/theShopListApp/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './study2/theShopListApp/shopping-list/shopping-edit/shopping-edit.component';


const myRoutes: Routes = [
  { path: '', component: MycodingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/about', component: AboutComponent },
  { path: 'contect', component: ContectComponent },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];
var myroutes1 = RouterModule.forRoot(myRoutes)

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
    HeaderComponent,
    Study2Component,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    

  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    myroutes1,
    HttpClientModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
