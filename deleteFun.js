**
 * delete route | delete book
 */
 app.delete("/delete/:id", (req, res) => {
    books = books.filter((b) => b.id !== parseInt(req.params.id));
    res.send({ message: "Success" });
 });

