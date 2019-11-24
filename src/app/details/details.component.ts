import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Book } from '../shared/books/book'
import { BookService } from '../shared/books/book.service'
import { Author } from '../shared/authors/author'
import { AuthorsService } from '../shared/authors/authors.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [
    BookService,
    AuthorsService
  ]
})
export class DetailsComponent implements OnInit {

  loading: boolean = false

  book: Book = new Book();
  authors: Array<Author> = new Array<Author>();

  constructor(
    private bookSvc: BookService,
    private authorSvc: AuthorsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.loading = true
    this.route.paramMap.subscribe(
      param => {
        this.bookSvc.getBookById(param.get('id')).subscribe(
          result => {
            this.book = result[0]
          }
        )
        this.authorSvc.getBookAuthors(param.get('id')).subscribe(
          result => {
            this.authors = result
          }
        )
      }
    )
  }

  toAuthorsBooks(id: string): string {
    return `/author-books/${id}`
  }

  getURL(ISBN: string): string {
    return `https://baldochi.unifei.edu.br/COM222/trabfinal/imagens/${ISBN}.01.MZZZZZZZ.jpg`
  }

  getLarge(ISBN: string) {
    window.open(`https://baldochi.unifei.edu.br/COM222/trabfinal/imagens/${ISBN}.01.LZZZZZZZ.jpg`,"_blank")
  }

  getPrice(price: number): string {
    return `$ ${price}`
  }
}
