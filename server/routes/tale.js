'use strict';

var Tale = require('../models/tale');

module.exports = function(app){

  // Get all the tales.
  app.get('/tales', function(req, res) {

    Tale.find()
      .select('_id title updatedDate')
      .sort('title')
      .exec(function (err, tales) {
        if (err) {
          res.send('cant find tales');
        } else {
          res.send(tales);
        }
      });
  });

  // Get updated tales.
  app.get('/tales/updated/:count', function(req, res) {

    Tale.find()
      .select('_id title updatedDate')
      .sort('-updatedDate')
      .limit(req.params.count)
      .exec(function (err, tales) {
        if (err) {
          res.send('cant find tales');
        } else {
          res.send(tales);
        }
      });
  });

  // Make a new tale.
  app.post('/tales', function(req, res) {

    var tale = new Tale({
      title: req.body.title,
      phrases: [ { text: req.body.text } ]
    });

    tale.save(function(err) {
      if (err) {
        res.send('there was an error');
      } else {
        res.send('success');
      }
    });
  });

  // Get a particular tale.
  app.get('/tales/:id', function(req, res) {

    Tale.findById(req.params.id, function(err, tale) {
      if (err) {
        res.send('cant find tale');
      } else {
        res.send(tale);
      }
    });
  });

  // Add a new phrase to a tale.
  app.put('/tales/:id', function(req, res) {

    Tale.findByIdAndUpdate(req.params.id, { $push: { phrases : { text: req.body.text } }, updatedDate: new Date() },
      function (err, tale) {
        if (err) {
          res.send('error updating');
        } else {
          res.send(tale);
        }
      });
  });

};

