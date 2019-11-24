import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Book } from '../shared/books/book'
import { BookService } from '../shared/books/book.service'

@Component({
  selector: 'app-authors-books',
  templateUrl: './authors-books.component.html',
  styleUrls: ['./authors-books.component.css'],
  providers: [BookService]
})
export class AuthorsBooksComponent implements OnInit {

  books: Array<Book>
  loading: boolean = false
  id: string

  constructor(
    private route: ActivatedRoute,
    private bookSvc: BookService
  ) { }

  ngOnInit() {
    this.loading = true
    this.route.paramMap.subscribe(
      param => {
        this.id = param.get('id')
        this.bookSvc.getBookAuthor(this.id).subscribe(
          result => {
            this.books = result
            this.loading = false
          }
        )
      }
    )
  }

}
