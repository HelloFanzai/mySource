import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  theRecipes:Recipe[] = [
    new Recipe('A test Recipe for name','It is a test for desc','https://images-gmi-pmc.edge-generalmills.com/1e24b5e7-e3e3-43ce-b737-a2215397f006.jpg'),
    new Recipe('A test Recipe for name','It is a test for desc','https://images-gmi-pmc.edge-generalmills.com/1e24b5e7-e3e3-43ce-b737-a2215397f006.jpg'),
    new Recipe('A test Recipe for name','It is a test for desc','https://images-gmi-pmc.edge-generalmills.com/1e24b5e7-e3e3-43ce-b737-a2215397f006.jpg'),
    
  ]

  constructor() { }

  ngOnInit(): void {
  }


}
