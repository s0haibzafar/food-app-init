import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFoodByTag(tag:string) : Foods[]{
    if(tag == "All"){
      return this.getAll(); 
    }else{
      return this.getAll().filter(food => food.tags?.includes(tag));
    }
  }

  getFoodById(id: number):Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllTags():Tag[]{
    return[
      {name : 'All', counts : 14},
      {name : 'FastFood', counts : 4},
      {name : 'Lunch', counts : 2},
      {name : 'SlowFood', counts : 3},
      {name : 'Fry', counts : 1},
      {name : 'Soup', counts : 1},
    ];
  }

  getAll():Foods[]{
    return[
      {
        id:1,
        name:'Pizza Pepperoni',
        cookTime:'10-20',
        price: 10,
        favorite: false,
        origin: ['italy'],
        star:4.0,
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
        star:4.5,
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
