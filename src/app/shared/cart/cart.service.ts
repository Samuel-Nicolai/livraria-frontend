import { Injectable } from '@angular/core';

import { Orderitems } from '../orderitems/orderitems'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  orders: Array<Orderitems> = []

  constructor() {
  }

  setToCart(ISBN: string) {

  }
}
