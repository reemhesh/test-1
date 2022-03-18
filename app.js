/**
 * add dependency
 */
const express = require('express');
const bodyparser = require('body-parser');

/**
 * use express | bodyparser | port used
 */
const app = express();
app.use(bodyparser.json());
const port = 3001;


/**
 * add data object | for ex: books api
 * {
 *  id: number
 *  name: string
 *  author: string
 * }
 */
let books = [
    {
        id:1,
        name:"human\'s life",
        author:"john doe",
    },
    {
        id:2,
        name:"animal\'s life",
        author:"barker hamed",
    },
    {
        id:3,
        name:"birds\'s life",
        author:"angela luba",
    }
];

/**
 * get route | list all books
 */
 app.get("/bookslist", (req, res) => {
   res.send(books);
 });

/**
 * get route | get book by id
 */
 app.get("/book/:id", (req, res) => {
    const book = books.find((b) => b.id === parseInt(req.params.id));
    book ? res.send(book) : res.status(404).send({ error: "NOTFOUND" });
 });

 /**
 * delete route | delete book
 */
 app.delete("/delete/:id", (req, res) => {
    books = books.filter((b) => b.id !== parseInt(req.params.id));
    res.send({ message: "Success" });
 });

 /**
  * put route | update book by id
  */
 app.put('/update/:id', (req, res) => {
    const bookIndex = books.findIndex(
        (b) => b.id === parseInt(req.params.id)
      );
      if(bookIndex != -1){
          books[bookIndex] = {
             ...books[bookIndex],
             ...req.body,
          };
          res.send(books[bookIndex]);
      }else{
        res.status(404).send({ error: "NOTFOUND" });
      }
 });

/**
 * post route | add new book
 */
 app.post("/add", (req, res) => {
    const id = Date.now();
    books.push({ ...req.body, id });
    res.send({ ...req.body, id });
 });

 
/**
 * listen to port
 */
app.listen(port, () => {
    console.log(`books app listening at http://localhost: ${port}`);
});
