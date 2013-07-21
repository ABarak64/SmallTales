'use strict';

var express = require('express'),
  config = require('./config'),
  path = require('path');

var SampleApp = function() {

    var self = this;

    self.setupVariables = function() {
        //  Set the environment variables we need.
        self.ipaddress = config.ipaddress;
        self.port      = config.port;
      };

    self.initializeServer = function() {

        self.app = express.createServer();

        self.app.configure(function() {
          self.app.use(express.bodyParser());
        });

        var mongoose = require('mongoose');
        mongoose.connect(config.connectionString);
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'MongoDB connection error.'));
        db.once('open', function callback () {
          console.log('MongoDB connection successful.');
        });

        self.app.use(express.static(path.join(__dirname, './client')));
        require('./routes/tale')(self.app);
        self.app.get('/time', function(req, res) {
          res.send({ time: new Date() });
        });
      };

    self.initialize = function() {
        self.setupVariables();
        self.initializeServer();
      };

    self.start = function() {
        //  Start the app on the specific interface (and port).
        self.app.listen(self.port, self.ipaddress, function() {
            console.log('%s: Node server started on %s:%d ...',
                        Date(Date.now() ), self.ipaddress, self.port);
          });
      };
  };

/**
 *  main():  Main code.
 */
var zapp = new SampleApp();
zapp.initialize();
zapp.start();

