import { Component, OnInit } from '@angular/core';

import { Cart } from '../shared/cart/cart'
import { CartService } from '../shared/cart/cart.service'

import { User } from '../shared/user/user'
import { UserService } from '../shared/user/user.service'

import { OrderitemsService, History } from '../shared/orderitems/orderitems.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [
    UserService,
    CartService,
    OrderitemsService
  ]
})
export class UserComponent implements OnInit {

  loading: boolean = false
  user: User
  logado: boolean = false
  email: string = ''
  arrCart: Array<Cart> = []

  history: Array<History> = []

  constructor(
    private userSvc: UserService,
    private cartSvc: CartService,
    private orderItemSvc: OrderitemsService
  ) { }

  ngOnInit() {
    this.user = this.userSvc.getLocalUser()
    if (this.user == null) {
      this.logado = false
      this.user = new User()
    } else {
      this.logado = true
    }

    this.getArrCart()
    this.getOrders()
  }

  getURL(ISBN: string): string {
    return `https://baldochi.unifei.edu.br/COM222/trabfinal/imagens/${ISBN}.01.THUMBZZZ.jpg`
  }

  getArrCart() {
    this.arrCart = this.cartSvc.getCart()
  }

  login() {
    this.loading = true
    this.userSvc.login(this.email).subscribe(
      result => {
        this.user = result
        this.logado = true
        this.loading = false
      },
      () => {
        alert('Erro ao efetuar login tente novamente mais tarde.')
      }
    )
  }

  cadastro() {
    this.loading = true
    if (
      this.user.fname == '' || this.user.fname == null
      || this.user.lname == '' || this.user.lname == null
      || this.user.city == '' || this.user.city == null
      || this.user.state == '' || this.user.state == null
      || this.user.street == '' || this.user.street == null
      || this.user.email == '' || this.user.email == null
      || this.user.zip == '' || this.user.zip == null
    ) {
      alert('Favor preencha todos os campos!');
      return
    } else {
      this.userSvc.create(this.user).subscribe(
        result => {
          console.log('Cadastrado com sucesso')
          this.user = result
          this.logado = true
          this.loading = false
        }
      )
    }
  }

  altera() {
    this.loading = true
    if (
      this.user.fname == '' || this.user.fname == null
      || this.user.lname == '' || this.user.lname == null
      || this.user.city == '' || this.user.city == null
      || this.user.state == '' || this.user.state == null
      || this.user.street == '' || this.user.street == null
      || this.user.email == '' || this.user.email == null
      || this.user.zip == '' || this.user.zip == null
    ) {
      alert('Favor preencha todos os campos!');
      return
    } else {
      this.userSvc.update(this.user).subscribe(
        result => {
          this.user = result
          this.logado = true
          this.loading = false
          alert('Atualizado com sucesso')
        }, () => {
          this.loading = false
          alert("Erro ao atualizar")
        }
      )
    }
  }

  getOrders() {
    this.orderItemSvc.getOrderItens(this.user.custID).subscribe(
      result => {
        this.history = result
      }
    )
  }
  
  getDate(dt) {
    dt = new Date(dt)
    return `${dt.getFullYear()}-${dt.getMonth()+1}-${dt.getDate()}`
  }
}
