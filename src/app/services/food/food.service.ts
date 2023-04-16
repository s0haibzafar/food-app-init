import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[]{
    return[
      {
        id:1,
        name:'Pizza Pepperoni',
        cookTime:'10-20',
        price: 10,
        favorite: false,
        origin: ['italy'],
        star:4.5,
        imageUrl:'./assets/food5.jpg',
        tags:['FastFood','Pizza','Lunch']
      },
      {
        id:2,
        name:'Meatball',
        cookTime:'20-30',
        price: 20,
        favorite: true,
        origin: ['persian', 'middle east', 'china'],
        star:4.7,
        imageUrl:'./assets/food3.jpg',
        tags:['SlowFood','Lunch']
      }

      // './assets/food2.jpg',
      // './assets/food10.jpg',
      // './assets/food11.jpg',
      // './assets/food12.jpg',
      // './assets/food13.jpg',
      // './assets/food1.jpg',
      // './assets/food4.jpg',
    ]
  }
}
