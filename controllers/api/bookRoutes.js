const router = require("express").Router();
const { Book, User } = require(`../../models`);
const withAuth = require("../../utils/auth");

router.put("/:id", withAuth, async (req, res) => {
  try {
    const bookData = await Book.update(
      {
        user_id: req.session.user_id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!bookData) {
      res.status(404).json({ message: "Book was not able to be saved!" });
      return;
    }
    res.status(200).json(bookData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Not working as intended yet
router.put("/:id", withAuth, async (req, res) => {
  try {
    const bookData = await Book.destroy(
      {
        user_id: null,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!bookData) {
      res
        .status(404)
        .json({ message: "Book was not able to be deleted from saved books!" });
      return;
    }
    res.status(200).json(bookData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
