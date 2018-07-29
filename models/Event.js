const mongoose = require('../db/connection')

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  date: {
    type: String,
    required: true
  },
  time: String,
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

const Event = mongoose.model('Event', EventSchema)

module.exports = Event
