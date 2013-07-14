'use strict';

var Tale = require('../models/tale');

module.exports = function(app){

  app.get('/tales', function(req, res) {

    Tale.find(function (err, tales) {
      if (err) {
        res.send('cant find tales');
      } else {
        res.send(tales);
      }
    });
  });

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

  app.get('/tales/:id', function(req, res) {

    Tale.findById(req.params.id, function(err, tale) {
      if (err) {
        res.send('cant find tale');
      } else {
        res.send(tale);
      }
    });
  });


  app.put('/tales/:id', function(req, res) {

    Tale.findByIdAndUpdate(req.params.id, { $push: { phrases : { text: req.body.text } }},
      function (err, tale) {
        if (err) {
          res.send('error updating');
        } else {
          res.send(tale);
        }
      });
  });

};

