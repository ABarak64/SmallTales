'use strict';

var CachedManager = require('../bll/cachedTalesManager');
var talesManager = new CachedManager();

module.exports = function(app){

  // Get all the tales.
  app.get('/tales', function(req, res) {
    talesManager.getTales(function(data) {
      res.send(data);
    });
  });

  // Get updated tales.
  app.get('/tales/updated/:count', function(req, res) {
    talesManager.getUpdatedTales(req.params.count, function(data) {
      res.send(data);
    });
  });

  // Make a new tale.
  app.post('/tales', function(req, res) {
    talesManager.addTale({ title: req.body.title, text: req.body.text, isNewParagraph: true }, function(data) {
      res.send(data);
    });
  });

  // Get a particular tale.
  app.get('/tales/:id', function(req, res) {
    talesManager.getTale(req.params.id, function(data) {
      res.send(data);
    });
  });

  // Add a new phrase to a tale.
  app.put('/tales/:id', function(req, res) {
    talesManager.updateTale({ id: req.params.id, text: req.body.text, isNewParagraph: req.body.isNewParagraph }, function(data) {
      res.send(data);
    });
  });

};

