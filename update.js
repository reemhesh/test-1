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
