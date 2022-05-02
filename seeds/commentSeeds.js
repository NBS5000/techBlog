const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "The first comment!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "More comments",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "Looks good",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_text: "Mic check, 1, 2",
    user_id: 4,
    post_id: 4,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
