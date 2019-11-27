import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'

import { Util } from '../util'
import { User } from './user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getLocalUser() {
    return <User>JSON.parse(localStorage.getItem('user'))
  }

  login(email: string) {
    let obj = JSON.stringify({email: email})

    return this.http.post<User>(`${Util.API_URL}customers/login`, obj, {
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
    .pipe(
      map((data: User) => {
        if (data == null || data == undefined) {
          console.log('Erro ao obter usuário')
          return null
        }

        localStorage.setItem('user', JSON.stringify(data))
        return data
      })
    )
  }

  create(user: User) {
    user.state.substring(0,2)
    let obj = JSON.stringify(user)

    return this.http.post<User>(`${Util.API_URL}customers/`, obj, {
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
    .pipe(
      map((data: User) => {
        if (data == null || data == undefined) {
          console.log('Erro ao cadastrar usuário')
          return null
        }

        localStorage.setItem('user', JSON.stringify(data))
        return data
      })
    )
  }

  update(user: User) {
    let obj = JSON.stringify(user)

    return this.http.patch<User>(`${Util.API_URL}customers/`, obj, {
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
    .pipe(
      map((data: User) => {
        if (data == null || data == undefined) {
          console.log('Erro ao atualizar usuário')
          return null
        }

        localStorage.setItem('user', JSON.stringify(data))
        return data
      })
    )
  }
}
