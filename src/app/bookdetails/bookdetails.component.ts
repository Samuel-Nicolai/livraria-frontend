import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../shared/books/book'
import { BookService } from '../shared/books/book.service'

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
 private book : Book;
 private description:  string;
 private title : string;
 private ISBN : string;
 private author: string;
 private price: number;
 private pages: string
 private publisher: string
 private edition: string
   

 
  constructor(private bookSvc: BookService,
    private activatedRoute: ActivatedRoute, ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        //busca na api o Id
        this.bookSvc.getBookById(id).subscribe(data => {
          //cria um item com quantidade e o objeto recuperado
          this.book = data[0];
          this.description = data[0].description
          this.title = data[0].title
          this.ISBN = data[0].ISBN
          this.publisher = data[0].publisher
          this.pages = data[0].pages
          this.edition = data[0].edition
          this.price = data[0].price
          
          
          
        }
        )
      }
    }

    )
  }
  getResume(description: string) {
  //   return description
  //     // .replace(/<.*?>/g, '')
  //     .substring(0, 200) 
  //     + description.substring (200,3000) + `</span>`
  // }
  return this.book.description;
  }
  

  getURL(ISBN: string): string {
    return `https://baldochi.unifei.edu.br/COM222/trabfinal/imagens/${ISBN}.01.MZZZZZZZ.jpg`
  }

  getLarge(ISBN: string) {
    window.open(`https://baldochi.unifei.edu.br/COM222/trabfinal/imagens/${ISBN}.01.LZZZZZZZ.jpg`,"_blank")
  }


}
