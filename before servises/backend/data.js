

  const books = [

    {
      id: "rkRArW8H_MoC",
      title: "Testable JavaScript",
      subtitle: "Ensuring Reliable Code",
       smallThumbnail:
        "http://books.google.com/books/content?id=rkRArW8H_MoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      language: "ch",

    },
    {
      id: "Nz9iAwAAQBAJ",
      title: "Effective JavaScript",
      subtitle: "68 Specific Ways to Harness the Power of JavaScript",
      smallThumbnail:
        "http://books.google.com/books/content?id=Nz9iAwAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      language: "rs",  

    },
    {
      id: "MhNhBgAAQBAJ",
      title: "Coding with JavaScript For Dummies",
      subtitle: "Coding with JavaScript For Dummies",

     smallThumbnail:
        "http://books.google.com/books/content?id=MhNhBgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      language: "ag",
    },
  ];

 const authors = [
    {
      id:1,
      name: 'Dummies'
    },
    {
      id:2,
      name:'David Herman'
    },
    {
      id:3,
      name:'Mark Ethan Trostler'
    }
  ]
  const bookAuthor = [
    {
      bookId:"MhNhBgAAQBAJ",
      authorId:1
    },
    {
      bookId:"Nz9iAwAAQBAJ",
      authorId:2
    },
    {
      bookId:"rkRArW8H_MoC",
      authorId:3
    },
  ]
  module.exports = {
    books: books,
    bookAuthor,
    authors
  };


  // get the author name of the first book

  // 1. get all the books
  // 2. get the first book books[0]
  // 3. using the bookID get the bookAuthor object
  // 4. get the authorId from the bookAuthor
  // 5. get the author object using athour id


