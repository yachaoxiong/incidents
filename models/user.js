// reference mongoose
const mongoose = require('mongoose');

//User schema
const userSchema= new mongoose.Schema({

   username:String


});

module.exports= mongoose.model('User',userSchema);