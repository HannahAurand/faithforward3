const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/events");

mongoose.Promise = Promise;

module.exports = mongoose;
