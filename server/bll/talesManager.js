'use strict';

var Tale = require('../models/tale');

function TalesManager() {};

TalesManager.prototype.getUpdatedTales = function(count, callback) {

  Tale.find()
      .select('_id title updatedDate')
      .sort('-updatedDate')
      .limit(count)
      .exec(function (err, tales) {
        if (err) {
          callback({ error: 'error getting tales' });
        } else {
          callback(tales);
        }
      });
};

TalesManager.prototype.getTales = function(callback) {

  Tale.find()
      .select('_id title updatedDate')
      .sort('title')
      .exec(function (err, tales) {
        if (err) {
          callback({ error: 'error getting tales' });
        } else {
          callback(tales);
        }
      });
};

TalesManager.prototype.addTale = function(newTale, callback) {

  var tale = new Tale({
      title: newTale.title,
      phrases: [ { text: newTale.text } ]
    });

  tale.save(function(err) {
    if (err) {
      callback({ error : 'error adding tale' });
    } else {
      callback({ success : true });
    }
  });
};

TalesManager.prototype.getTale = function(taleId, callback) {

  Tale.findById(taleId, function(err, tale) {
      if (err) {
        callback({ error: 'error getting tale' });
      } else {
        callback(tale);
      }
    });
};

TalesManager.prototype.updateTale = function(tale, callback) {

  Tale.findByIdAndUpdate(tale.id, { $push: { phrases : { text: tale.text } }, updatedDate: new Date() },
      function (err, tale) {
        if (err) {
          callback({ error: 'error updating tale'});
        } else {
          callback(tale);
        }
      });
};

module.exports = TalesManager;

