// synchronous/ blocking
// you just wait for stuff to complete until you got to the next line

// this style is not efficient
/* console.log('first statement');
const fileData1 = readFile(4,5); // 5sec
const fileData = readFile(fileData1,5); // 5sec
const fileData = readFile(4,5); // 5sec
console.log(fileData);
console.log('last statement'); */

// async/ non- blocking

// code is  very hard to reason when we use callback
// every async function needs to be written accepting callback

console.log("first statement");
readFileAsync(4, 5, (r1) => {
  readFileAsync(r1, 5, (r2) => {
    readFileAsync(r2, 4, (r3) => {
      console.log(r3);
    });
  });
});
console.log("last statement");

function readFileAsync(a, b, cb) {
  setTimeout(() => {
    cb(a + b);
  }, 3000);
}

function readFile(a, b) {
  return a + b;
}

// callback hell

// fetchAllBooks((books) => {
//   const firstBook = books[0];
//   const firstBookId = firstBook.id;
//   fetchBookAuthor(firstBookId, (bookAuthor) => {
//     const authorId = bookAuthor.authorId;
//     fetchAuthor(authorId, (author) => {
//       console.log(author.name);
//     });
//   });
// });

// function fetchAllBooks(cb) {
//   $.get("http:/m,.//localhost:3000/books", function (bookResposne) {
//     cb(bookResposne);
//   });
// }

// function fetchBookAuthor(bookId,cb){
//   $.get(`http://localhost:3000/author/by/book/${bookId}`,function(bookAuthor){
//     cb(bookAuthor)
//   })
// }

// function fetchAuthor(authorId,cb){
//   $.get(`http://localhost:3000/author/${authorId}`,function(author){
//     cb(author)
//   })
// }

function fetchAllBooksUsingPromise() {
  //book array
  let p1 = new Promise((resolve, reject) => {
    $.get("http://localhost:3000/books", function (bookResposne) {
      //books array
      resolve(bookResposne);
    });
  });
  return p1;
}

function fetchBookAuthorByPromise(bookId) {
  //book author object
  const p2 = new Promise((resolve, reject) => {
    $.get(`http://localhost:3000/author/by/book/${bookId}`, function (bookAuthor) {
        resolve(bookAuthor);
      }
    );
  });
  return p2;
}

function fetchAuthorByPromise(authorId) {
  const p2 = new Promise((resolve, reject) => {
    $.get(`http://localhost:3000/author/${authorId}`, function (author) {
      resolve(author);
    });
  });

  return p2;
}

fetchAllBooksUsingPromise()
  .then((books) => {
    const firstBook = books[0];
    const firstBookId = firstBook.id;
    return fetchBookAuthorByPromise(firstBookId);
  })
  .then((bookAuthor) => {
    const authorId = bookAuthor.authorId;
    return fetchAuthorByPromise(authorId);
  })
  .then((author) => {
    console.log(author.name);
  });

// async function requirement(){
//   const books = await fetchAllBooksUsingPromise();
//   const firstBook = books[0];
//   const firstBookId = firstBook.id;
//   const bookAuthor =  await fetchBookAuthorByPromise(firstBookId);
//   const authorId = bookAuthor.authorId;
//   const author = await fetchAuthorByPromise(authorId);
//   console.log(author.name)
// }
A