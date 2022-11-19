const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  calories: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error("Negative calories aren't real.");
    },
  },
});
// const authorSchema = new mongoose.Schema({
//   name: String,
//   posts: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Post",
//     },
//   ],
//   comments: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Comment",
//     },
//   ],
// });
// const commentSchema = new mongoose.Schema({
//   author: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Author",
//   },
//   post: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Post",
//   },
// });

// const postsSchema = new mongoose.Schema({
//   author: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Author",
//   },
//   title: String,
//   date: String,
//   text: String,
//   comments: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Comment",
//     },
//   ],
// });
// const posts = mongoose.model("POST", postsSchema);
const Food = mongoose.model("Food", FoodSchema);
// const comments = mongoose.model("COMMENT", commentSchema);
// //const author = mongoose.model("AUTHOR", authorSchema);

module.exports = {
  Food: Food,
};
