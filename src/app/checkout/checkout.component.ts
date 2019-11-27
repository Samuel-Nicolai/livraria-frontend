import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { MatSnackBar } from '@angular/material/snack-bar'

import { Cart } from '../shared/cart/cart'
import { CartService } from '../shared/cart/cart.service'
import { User } from '../shared/user/user'
import { UserService } from '../shared/user/user.service'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  providers: [
    CartService,
    UserService
  ]
})
export class CheckoutComponent implements OnInit {

  arrCart: Array<Cart> = []
  total: number = 0
  user: User = new User()

  constructor(
    private cartSvc: CartService,
    private userSvc: UserService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getArrCart()
    this.user = this.userSvc.getLocalUser()
  }

  getURL(ISBN: string): string {
    return `https://baldochi.unifei.edu.br/COM222/trabfinal/imagens/${ISBN}.01.THUMBZZZ.jpg`
  }

  getArrCart() {
    this.arrCart = this.cartSvc.getCart()
  }

  getTotal(): string {
    let t = 0
    this.arrCart.forEach(element => {
      t += element.price * element.quantity
    })
    return `$ ${t.toFixed(2)}`
  }

  finalizar() {
    let arrItens = []
    for (let i of this.arrCart) {
      let item = {
        ISBN: i.ISBN,
        qty: i.quantity,
        price: i.price
      }
      arrItens.push(item)
    }
    let order = {
      custID: this.user.custID,
      itens: [...arrItens]
    }
    this.cartSvc.createOrder(order).subscribe(
      result => {
        console.log(result)
        this._snackBar.open('Compra concluída com sucesso!', 'Ok', {
          duration: 4000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
        this.router.navigate(['/home'])
      }, () => {
        console.log('erro')
      }
    )
  }
}
