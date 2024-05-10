import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-guitar',
  standalone: true,
  imports: [],
  templateUrl: './guitar.component.html',
  styleUrl: './guitar.component.css'
})

export class GuitarComponent{
  //---------------------------
  @Input('guitar') guitar:any;
  //---------------------------
  constructor(private carService:CartService){
  }
  //---------------------------
  handleClick(guitar:any){
    console.log('Desde la guitarra '+guitar.id);
    this.carService.addItems(guitar);
  }


}
