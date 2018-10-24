let router = require("express").Router();
let sequelize = require("../db");
let Book = sequelize.import("../models/books");

//----------------------------CREATE-----------------------------
router.post("/book", (req, res) => {
  Book.create({
    nameOfBook: req.body.books.nameOfBook,
    author: req.body.books.author,
    genre: req.body.books.genre,
    pubYear: req.body.books.pubYear,
    rating: req.body.books.rating
  }).then(
    (message = data => {
      res.send(data);
    })
  );
});

//----------------------------UPDATE-----------------------------
router.put("/book/:id", (req, res) => {
  const data = req.params.id;
  let nameOfBook = req.body.books.nameOfBook;
  let author = req.body.books.author;
  let genre = req.body.books.genre;
  let pubYear = req.body.books.pubYear;
  let rating = req.body.books.rating;

  Book.update(
    {
      nameOfBook: nameOfBook,
      author: author,
      genre: genre,
      pubYear: pubYear,
      rating: rating
    },
    { where: { id: data } }
  ).then(
    (updateSuccess = updateBook => {
      res.json({
        nameOfBook: nameOfBook,
        author: author,
        genre: genre,
        pubYear: pubYear,
        rating: rating
      });
    })
  )(
    (updateErr = err => {
      res.send(500, err.message);
    })
  );
});

//----------------------------DELETE-----------------------------
router.delete("/book/:id", (req, res) => {
  const data = req.params.id;

  Book.destroy({
    where: { id: data }
  }).then(
    (deleteLogSuccess = data => {
      res.send("Book removed");
    }),
    (deleteLogErr = err => {
      res.send(500, err.message);
    })
  );
});

module.exports = router;
