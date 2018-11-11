var path = require('path');
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    cookieParser = require('cookie-parser');

    module.exports.init = function() {
        //mongoose.connect(config.db.uri);//Database not used yet
      
        //initialize app
        var app = express();
      
        //enable request logging for development debugging
        app.use(morgan('dev'));
        //body parsing middleware
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
      
        app.use(cookieParser());//Might be needed to store persistent user sessions and for data tracking
        
        app.use("/", express.static('client'));


        app.get('*', (req, res) => {
            res.redirect('/');
          });
            return app;
        };