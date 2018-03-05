const mongoose = require("../db/connection");

const Event = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: number,
  location: {
    type: string,
    required: true
  },
  description: {
    type: string,
    required: true
  }
});
