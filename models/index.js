const Book = require("./Book");
const User = require("./User");

// Genre.hasMany(Books, {
//   foreignKey: "book_id",
//   onDelete: "CASCADE",
// });

// Books.hasOne(Genre, {
//   foreignKey: "genre_type",
//   onDelete: "CASCADE",
// });
Book.belongsTo(User, {
  foreignKey: "user_id",
});

// A user can have many books saved
User.hasMany(Book, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = { User, Book };
