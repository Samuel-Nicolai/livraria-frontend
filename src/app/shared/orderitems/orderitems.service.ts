import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Util } from '../util'
import { Orderitems } from './orderitems'

export class History {
  OrderID: number
  ISBN: string
  qty: number
  price: number
  CustID: number
  orderdate: Date
}

@Injectable({
  providedIn: 'root'
})
export class OrderitemsService {

  constructor(private http: HttpClient) { }

  getOrderItens(id: number) {
    return this.http.get<Array<History>>(`${Util.API_URL}orderitems/${id}`)
  }

  /*
  addHero (hero: Hero): Observable<Hero> {
  return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
    .pipe(
      catchError(this.handleError('addHero', hero))
    );
}
*/
}
