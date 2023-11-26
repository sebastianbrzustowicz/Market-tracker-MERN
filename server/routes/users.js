var express = require('express');
var router = express.Router();
const Users = require('../models/users')

router.get('/', function(req, res, next) {
    res.send('Registration successful!');
  });

router.get('/login/check/', function(req, res, next) {
  console.log('Login checking ...');
  res.send('Login failed!');
  });

router.post('/registration/check/', function(req, res, next) {
  //if (request.method == 'POST') {
  console.log('Registration checking ...');
  // to do: check login availbility
  //console.log(req.body)
  //
  message = "Checking availbility..."
  Users.find({ email : req.body.email }).exec()
  .then( result => {//console.log(result)
  if (result.length>0) {res.send({message: "Email taken!" });res.end();} 
  else {
  const newUser = new Users({
    email: req.body.email,
    login: req.body.login,
    password: req.body.password,
  });
  newUser.save();
  res.send({message: "Registered :)" });
  res.end();
  }})
  
  ////const newUser = new Users({
  ////  email: req.body.email,
  ////  login: req.body.login,
  ////  password: req.body.password,
  ////});
  ////newUser.save();
  //
  
  //res.send('Registration successful!');
  //res.send('Registration failed!');
  //}
  });

module.exports = router;