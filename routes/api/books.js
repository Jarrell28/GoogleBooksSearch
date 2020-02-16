const router = require("express").Router();
const db = require("../../models");
const mongoose = require("mongoose");

router.post("/", function (req, res) {
  db.Book.create(req.body.book).then(book => {
    res.json(book);
  })
})

router.get("/", function (req, res) {
  db.Book.find().then(book => {
    res.json(book);
  })
})

router.delete("/:id", function (req, res) {
  const id = req.params.id;
  db.Book.deleteOne({ _id: mongoose.Types.ObjectId(id) }).then(book => {
    res.json("success")
  });
})


module.exports = router;
