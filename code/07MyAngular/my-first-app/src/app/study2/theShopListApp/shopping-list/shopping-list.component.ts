import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  theIngredients:Ingredient[] =[
    new Ingredient('item111',111),
    new Ingredient('item112',222),
    new Ingredient('item113',333),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
