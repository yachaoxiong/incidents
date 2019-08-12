// reference mongoose
const mongoose = require('mongoose');

//Book schema
const bookSchema= new mongoose.Schema({

    Author:         String,
    Title:          String,
    Year:           Number,
    Publication:    String

});

module.exports= mongoose.model('Book',bookSchema);