(function () {
  "use strict";
  var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    config = require('./config');

  var dbString = 'mongodb://' +
    config.dbUsername + ':' +
    config.dbPassword + '@' +
    config.dbUrl + ':' +
    config.dbPort + '/' +
    config.dbName;

  mongoose.connect(dbString, function (error) {
    if (!error) {
      console.log('Connected to Database: ' + config.dbName);
      require('./models/initializeModels');
    } else {
      console.error('Error Connecting to Database ' + config.dbName);
      process.exit(1);
    }
  });

  var index = require('./routes/index');

  var app = express();

  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');

  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use('/', index);

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
  });

  module.exports = app;
})();
