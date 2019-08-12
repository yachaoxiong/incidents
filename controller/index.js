var express = require('express');
var router = express.Router();
var Book=require('../models/book');
var User=require('../models/user');
var Password=require('../models/password');
var md5 = require('md5');
const saltedSha256 = require('salted-sha256');
/* GET home page. */
router.get('/', function(req, res, next) {

        res.render('index', { title: 'Express'});


});
router.post('/',(req,res,next)=>{
    User.create({username:req.body.username},(error,user)=>{
        let password=md5(req.body.password);
        let salt=saltedSha256(req.body.password, 'SUPER-S@LT!');
        Password.create({password:password,salt:salt},(error,password)=>{
            res.redirect('/');
        })
    })
});
router.get('/books', function(req, res, next) {

    Book.find({},(error,books)=>{
      console.log(books)
    res.render('books', { title: 'Express' ,Books:books });
    })
});
router.post('/books', function(req, res, next) {
  Book.create({
      Author:req.body.Author,
      Title:req.body.Title,
      Year:req.body.Year,
      Publication:req.body.Publication
  },(error,book)=>{
    console.log(book)
    res.redirect('/books');
  })
});
router.post('/search',(req,res,next)=>{
  //option i is case-insensitive
  Book.find({Author: {$regex:req.body.Author,$options:'i'},Title: {$regex:req.body.title,$options:'i'},year: {$regex:req.body.year,$options:'i'}},(err,books)=>{
    res.render('books',{ title: 'Express' ,Books:books })
  })
});
module.exports = router;
