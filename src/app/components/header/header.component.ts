import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  ///
  public cart:any;
  public carTotal:any;
  
  ///
  constructor(private cartSvs:CartService){
    // asi se instancia la señal, se agregan parentesis al final para obtener el valor
    this.cart = this.cartSvs.carReadonly; 
    this.carTotal = this.cartSvs.cartTotalReadonly;
  }
  
  ///
  ngOnInit(): void {
    this.cartSvs.initialCart();
  }

  // Funcion para quitar elementos del array
  removeFromCart(id:any){
    console.log(`Enviando item ${id}`);
    this.cartSvs.removeFromCart(id);
  }

  // Funcion para incrementar en 1 la catidad de un item
  increaseQuantity(id:any){
    this.cartSvs.increaseQuatity(id);
  }

  // Funcion para decrementar en 1 la catidad de un item
  decreaseQuantity(id:any){
    this.cartSvs.decreaseQuantity(id);
  }

  // Funcion para limpiar el carrito
  clearCart(){
    this.cartSvs.clearCart();
  }

}
