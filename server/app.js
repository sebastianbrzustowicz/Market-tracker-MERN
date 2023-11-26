var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors"); //
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const mongoose = require('mongoose');

// Mongodb connection
const uri = "mongodb+srv://sbrzustowicz:Yellowcard1234@cluster0.peand5y.mongodb.net/MarketTracker";
async function connect() {
    try{
        (await mongoose.connect(uri)).isObjectIdOrHexString(()=> {console.log("connected");});
        console.log('mongoDB database connected! :)')
    } catch (error) { console.log("not connected! :(")
        console.error(error);
    }}
connect();
//

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors()); //
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
