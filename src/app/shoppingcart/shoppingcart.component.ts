import { Component, OnInit } from '@angular/core';

import { Cart } from '../shared/cart/cart'
import { CartService } from '../shared/cart/cart.service'

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css'],
  providers: [
    CartService
  ]
})
export class ShoppingcartComponent implements OnInit {

  arrCart: Array<Cart> = []
  empty: boolean = true
  total: number = 0;

  constructor(
    private cartSvc: CartService
  ) { }

  ngOnInit() {
    this.getArrCart()
  }

  getArrCart() {
    this.arrCart = this.cartSvc.getCart()
    if (this.arrCart == null || this.arrCart.length == 0) {
      this.empty = true
    } else {
      this.empty = false
    }
  }

  getTotal(): string {
    let t = 0
    this.arrCart.forEach(element => {
      t += element.price * element.quantity
    })
    return `$ ${t.toFixed(2)}`
  }

  deleteBookOfCart(ISBN: string) {
    this.cartSvc.deleteBook(ISBN)
    this.getArrCart()
  }

  remove(ISBN: string) {
    this.cartSvc.removeQuantityBook(ISBN)
    this.getArrCart()
  }

  add(ISBN: string) {
    this.cartSvc.addQuantityBook(ISBN)
    this.getArrCart()
  }

  getURL(ISBN: string): string {
    return `https://baldochi.unifei.edu.br/COM222/trabfinal/imagens/${ISBN}.01.THUMBZZZ.jpg`
  }
}

