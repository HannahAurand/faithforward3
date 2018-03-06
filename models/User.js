const mongoose = require("../db/connection");
const bcrypt = require("bcrypt-node.js");

const userSchema = mongoose.Schema({
  local: {
    username: String,
    password: String
  }
});
