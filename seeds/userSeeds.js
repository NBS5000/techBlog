const { User } = require("../models");

const userData = [
  {
    username: "Obi1",
    password: "password",
  },
  {
    username: "Snips",
    password: "password",
  },
  {
    username: "Palp66",
    password: "password",
  },
  {
    username: "TheDooks",
    password: "password",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;