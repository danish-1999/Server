const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
const { Schema } = mongoose; // Destructuring.

const userSchema = new Schema({
 googleID: String,
});

mongoose.model("users", userSchema);
