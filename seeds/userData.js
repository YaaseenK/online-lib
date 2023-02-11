const { User } = require("../models");

const userData = [
  {
    name: "renato",
    email: "ren99cordova@gmail.com",
    password: "password12345",
  },
  {
    name: "icaro",
    email: "icaro12@hotmail.com",
    password: "password12345",
  },
  {
    name: "glen",
    email: "kendalbastien@gmail.com",
    password: "password12345",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
