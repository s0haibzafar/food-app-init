import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():string[]{
    return[
      './assets/food1.jpg',
      './assets/food2.jpg',
    ]
  }
}
