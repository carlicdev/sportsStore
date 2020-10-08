const mongoose = require('mongoose');
const URI = process.env.DB_URI;

mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false})
    .then(() => console.log('Connected to DB'))
    .catch(err => console.error(err))

module.exports = mongoose;