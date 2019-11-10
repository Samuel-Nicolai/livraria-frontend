import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Util } from '../util'
import { Book } from './book'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAleatoryBooks() {
    return this.http.get<Array<Book>>(`${Util.API_URL}books/aleatory`)
  }

  getBookCategory(id: string) {
    return this.http.get<Array<Book>>(`${Util.API_URL}categories/${id}/books/`)
  }
}
