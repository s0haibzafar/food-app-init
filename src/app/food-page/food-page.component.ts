import { Component, OnInit } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  food!:Foods;
  constructor(private route: ActivatedRoute, private fs: FoodService) {
   
   }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      if(params['id']){
        this.food = this.fs.getFoodById(params['id']);
      }
    });
  }

}
