import { Component } from "@angular/core";

const bookData = [
    {
      id: "p1v6DwAAQBAJ",
      title: "Eloquent JavaScript, 3rd Edition",
      subtitle: "A Modern Introduction to Programming",
      author: "Marijn Haverbeke",
      smallThumbnail:
        "http://books.google.com/books/content?id=p1v6DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      language: "en",
    },
    {
      id: "PXa2bby0oQ0C",
      title: "JavaScript: The Good Parts",
      subtitle: "The Good Parts",
      author: "Douglas Crockford",
      smallThumbnail:
        "http://books.google.com/books/content?id=PXa2bby0oQ0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      language: "en",
    },
    {
      id: "qU3rAgAAQBAJ",
      title: "Speaking JavaScript",
      subtitle: "An In-Depth Guide for Programmers",
      author: "Axel Rauschmayer",
      smallThumbnail:
        "http://books.google.com/books/content?id=qU3rAgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      language: "en",
    },
    {
      id: "4RChxt67lvwC",
      title: "JavaScript",
      subtitle: "The Definitive Guide",
      author: "David Flanagan",
      smallThumbnail:
        "http://books.google.com/books/content?id=4RChxt67lvwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      language: "sp",
    },
    {
      id: "71nDBQAAQBAJ",
      title: "JavaScript for Kids",
      subtitle: "A Playful Introduction to Programming",
      author: "Nick Morgan",
      smallThumbnail:
        "http://books.google.com/books/content?id=71nDBQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      language: "sp",
    },
    {
      id: "ptiYBAAAQBAJ",
      title: "JavaScript & jQuery: The Missing Manual",
      subtitle: "JavaScript & jQuery: The Missing Manual",
      author: "David Sawyer McFarland",
      smallThumbnail:
        "http://books.google.com/books/content?id=ptiYBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      language: "ch",
    },
    {
      id: "bzekBgAAQBAJ",
      title: "Beginning JavaScript",
      subtitle: "Beginning JavaScript",
      author: "Jeremy McPeak",
      smallThumbnail:
        "http://books.google.com/books/content?id=bzekBgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      language: "ch",
    },
    {
      id: "rkRArW8H_MoC",
      title: "Testable JavaScript",
      subtitle: "Ensuring Reliable Code",
      author: "Mark Ethan Trostler",
      smallThumbnail:
        "http://books.google.com/books/content?id=rkRArW8H_MoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      language: "ch",
    },
    {
      id: "Nz9iAwAAQBAJ",
      title: "Effective JavaScript",
      subtitle: "68 Specific Ways to Harness the Power of JavaScript",
      author: "David Herman",
      smallThumbnail:
        "http://books.google.com/books/content?id=Nz9iAwAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      language: "rs",  
    },
    {
      id: "MhNhBgAAQBAJ",
      title: "Coding with JavaScript For Dummies",
      subtitle: "Coding with JavaScript For Dummies",
      author: "Dummies",
      smallThumbnail:
        "http://books.google.com/books/content?id=MhNhBgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      language: "ag",
    },
];

@Component({
    selector:'book-table',
    templateUrl: './book-table.component.html',
    styleUrls: ['./book-table.component.scss']
})
export class BookTableComponent{

    books:any[] = bookData;
    columns:string[] = Object.keys(bookData[0]);
    clickedBook:string =  "";
    hiddenColumns:string[] = [];


    getLanguageColor(language:string){
        if(language == "en"){
            return 'red'
        }else{
            return 'black'
        }
    }

    getLanguageClass(language:string){
        if(language == "en"){
            return 'text-red'
        }else{
            return 'text-black'
        }
    }

    onRowClick(title:string){
        this.clickedBook = title;
    }


    onFilterbtnClick(column:string){
      if(this.hiddenColumns.includes(column)){
        this.hiddenColumns = this.hiddenColumns.filter((cl) => {
          return cl !== column
        })
      }else {
        this.hiddenColumns.push(column);
      }
    }
    isValidURL(url:string) {
      var res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
      return (res !== null)
    };

    isHidden(column:string){
      return this.hiddenColumns.includes(column);
    }

    isShown(column:string){
      return !this.isHidden(column)
    }

    getButtonClass(column:string){
     return this.isHidden(column) ? 'btn-danger' : 'btn-primary';
    }

    onColumnFilterClick(hiddenColumns:any){
      this.hiddenColumns=hiddenColumns;
    }

    getBookLength(){
      return this.books.length;
    }
  
}



