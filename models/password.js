// reference mongoose
const mongoose = require('mongoose');

//Password schema
const passwordSchema= new mongoose.Schema({

    password:         String,
    salt:             String


});

module.exports= mongoose.model('Password',passwordSchema);