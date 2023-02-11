const sequelize = require("../config/connection");

// const seedUsers = require("./userData");
const seedBooks = require("./books");
// const genreData = require("./genreData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // await seedUsers();
  // console.log("\n----- USERS SEEDED -----\n");

  await seedBooks();
  console.log("\n----- BOOKS SEEDED -----\n");

  process.exit(0);
};

seedDatabase();
