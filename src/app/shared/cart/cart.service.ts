import { Injectable } from '@angular/core';

import { Cart } from './cart'
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {
  }

  public addToCart(ISBN: string, title: string, price: number) {
    let arrCart: Array<Cart> = JSON.parse(localStorage.getItem('cart'))

    if (arrCart === null) {
      arrCart = []
      arrCart.push({ ISBN: ISBN, title: title, price: price, quantity: 1 })
    }
    else {
      let find: boolean = false
      for (let cart of arrCart) {
        if (cart.ISBN == ISBN) {
          cart.quantity++
          find = true
        }
      }
      if (!find) {
        arrCart.push({ ISBN: ISBN, title: title, price: price, quantity: 1 })
      }
    }

    localStorage.setItem('cart', JSON.stringify(arrCart))
  }

  getCart() {
    return <Array<Cart>> JSON.parse(localStorage.getItem('cart'))
  }

  deleteBook(ISBN: string) {
    let arrCart: Array<Cart> = JSON.parse(localStorage.getItem('cart'))
    
    arrCart.forEach((element, index) => {
      if (element.ISBN == ISBN) {
        arrCart.splice(index, 1)
      }
    })

    localStorage.setItem('cart', JSON.stringify(arrCart))
  }

  removeQuantityBook(ISBN: string) {
    let arrCart: Array<Cart> = JSON.parse(localStorage.getItem('cart'))
    
    for (let cart of arrCart) {
      if (cart.ISBN == ISBN) {
        cart.quantity--
      }
    }

    localStorage.setItem('cart', JSON.stringify(arrCart))
  }

  addQuantityBook(ISBN: string) {
    let arrCart: Array<Cart> = JSON.parse(localStorage.getItem('cart'))
    
    for (let cart of arrCart) {
      if (cart.ISBN == ISBN) {
        cart.quantity++
      }
    }

    localStorage.setItem('cart', JSON.stringify(arrCart))
  }
}
