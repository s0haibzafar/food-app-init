import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():string[]{
    return[
      './assets/food5.jpg',
      './assets/food3.jpg',
      './assets/food2.jpg',
      './assets/food1.jpg',
      './assets/food4.jpg',
    ]
  }
}
