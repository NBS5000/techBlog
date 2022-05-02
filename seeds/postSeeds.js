const { Post } = require("../models");

const postData = [
  {
    title: "Posting here",
    content: "Post, but it's not snail mail!",
    user_id: 1,
  },
  {
    title: "Use the force!",
    content: "Why wouldn't you? I mean, it's everywhere",
    user_id: 2,
  },
  {
    title: "Lightsaber",
    content: "Whats your favourite colour?",
    user_id: 3,
  },
  {
    title: "What's this?",
    content: "It's the force, baby!",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;