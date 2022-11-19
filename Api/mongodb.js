const mongoose = require("mongoose");
async function db() {
  let con = await mongoose.connect("mongodb://localhost/demo");
}
db();
