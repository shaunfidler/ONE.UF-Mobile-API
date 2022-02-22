var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var apiRouter = require('./routes/api');


var start = () => {

    global.config = require('./config/config.js')

    /* 
        connect to database
        - reference README for db uri
    */
    mongoose.connect(config.db.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    //mongoose.set('useCreateIndex', true);
    //mongoose.set('useFindAndModify', false);

    console.log("**MongoDB Connection Success**")

    var app = express();

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    app.use('/api', apiRouter);

    console.log("**Server Ready for Connections**")

    module.exports = app;
}

start()
