var express = require('express');
var router = express.Router();
const Users = require('../models/users')

router.get('/', function(req, res, next) {
    res.send('test');
    res.end();
  });

router.post('/login/check/', function(req, res, next) {
  console.log('Login checking ...');

  Users.find({ email : req.body.email }).exec()
  .then( result => {//console.log(result)
  if (result.length<1) {res.send({message: "No such account!", login: "", password: "" });res.end();} 
  
  else {
  if (req.body.password === result[0].password) {
    res.send({message: "Logged in :)", login: result[0].login, password: result[0].password });
    res.end();

  } else {
    res.send({message: "Wrong password!", login: "", password: "" });
    res.end();
  }  
  }})
  });

router.post('/registration/check/', async function(req, res, next) {
  console.log('Registration checking ...');
  message = "Checking availbility..."
  Users.find({ email : req.body.email }).exec()
  .then( result => {//console.log(result)
  if (result.length>0) {message = "Email taken!"} 
  else {
  const newUser = new Users({
    email: req.body.email,
    login: req.body.login,
    password: req.body.password,
  });
  newUser.save();
  message = "Registered :)"
  }})
  .then(()=> {
  res.send({message: message });
  res.end();
  })
  });

module.exports = router;