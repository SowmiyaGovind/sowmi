const express = require("express");
const app = express()
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');
const port = 3000;
const books = require("./data").books;
const bookAuthorData = require("./data").bookAuthor;
const authors = require("./data").authors;

app.use(cors());
app.use(bodyParser.json({type: 'application/*+json'}));

app.listen(port, () => {
  console.log(` express server listening at http://localhost:${port}`);
});

app.get('/books', (req, res) => {
  setTimeout(() => {
    res.json(books);
  }, 2000);
});


app.get('/authors',(req,res) => {
  setTimeout(() => {
    res.json(authors);
  }, 3000);
})

app.get('/author/:authorId',(req,res) => {
  const authorId = req.params.authorId;
  const author = authors.find((a) => {
    return a.id == authorId
  })
  setTimeout(() => {
    res.json(author)
  }, 3000);
})

app.get('/author/by/book/:bookid',(req,res) => {
  const bookId = req.params.bookid;
  const bookAuthor = bookAuthorData.find((b) => {
    return b.bookId == bookId
  })
  setTimeout(() => {
    res.json(bookAuthor)
  }, 2000);
})

