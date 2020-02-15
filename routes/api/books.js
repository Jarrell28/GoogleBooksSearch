const router = require("express").Router();
const db = require("../../models");

router.post("/", function (req, res) {
  db.Book.create(req.body.book).then(book => {
    res.json(book);
  })
})

// Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
