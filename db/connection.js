const mongoose = require('mongoose')

if (process.env.NODE_ENV == 'production') {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect('mongodb://localhost/events')
}

mongoose.Promise = Promise

module.exports = mongoose
