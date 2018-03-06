// const mongoose = require("../db/connection");
// const bcrypt = require("bcrypt-node.js");

// const userSchema = mongoose.Schema({
//   local: {
//     username: String,
//     password: String
//   }
// });

// //Hash the password
// User.methods.encrypt = function(password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// //compare hashed password and real password???
// User.methods.validPassword = function(password) {
//   return bcrypt.compareSync(password, this.local.password);
// };

// //export it all
// module.exports = mongoose.model("User", User);
