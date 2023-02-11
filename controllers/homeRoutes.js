const router = require("express").Router();
const { User, Book } = require("../models");
const withAuth = require("../utils/auth");

//all books
router.get(`/`, async (req, res) => {
  try {
    const booksData = await Book.findAll({
      include: [User],
    });
    const books = booksData.map((book) => book.get({ plain: true }));

    res.render(`home`, {
      books,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//books by genre
router.get("/genre/:genre", async (req, res) => {
  try {
    const booksData = await Book.findAll({
      where: {
        genre: req.params.genre,
      },
    });

    const books = booksData.map((book) => book.get({ plain: true }));
    console.log(booksData);

    res.render("genre", {
      books,
    });
  } catch (err) {
    res.json(err);
  }
});

//one book by id
router.get("/book/:id", async (req, res) => {
  try {
    const bookData = await Book.findByPk(req.params.id);
    if (!bookData) {
      res.status(404).json({ message: "No book with this id!" });
      return;
    }
    const book = bookData.get({ plain: true });
    console.log(book);
    res.render(`book`, book);
  } catch (err) {
    res.status(500).json(err);
  }
});

//one book by title
router.get("/title/:title", async (req, res) => {
  try {
    const bookData = await Book.findOne({
      where: {
        title: req.params.title,
      },
    });
    const book = bookData.get({ plain: true });
    console.log(book);
    res.render(`book`, book);
  } catch (err) {
    res.status(500).json(err);
  }
});

// books by author
router.get("/author/:author", async (req, res) => {
  try {
    const booksData = await Book.findAll({
      where: {
        author: req.params.author,
      },
    });

    const books = booksData.map((book) => book.get({ plain: true }));
    console.log(booksData);

    res.render("genre", {
      books,
    });
  } catch (err) {
    res.json(err);
  }
});

router.get("/saved", withAuth, async (req, res) => {
  try {
    const savedBooks = await Book.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    const books = savedBooks.map((book) => book.get({ plain: true }));

    res.render("saved", {
      books,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});
router.get("/logout", (req, res) => {
  res.render("logout");
});

module.exports = router;
