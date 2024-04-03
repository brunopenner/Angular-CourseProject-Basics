import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.seriouseats.com/thmb/6f42-C_G_iTGaePdVUpO6GqCNHU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20211201-fish-piccata-vicky-wasik-17-205e3c62dd94410f9fae9418417b4459.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
