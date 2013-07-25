'use strict';

var Tale = require('../models/tale');

function TalesManager() {};

TalesManager.prototype.formatPhrase = function(sentence) {
  var endingChars = ['.', '!', '"', '\'', '?'];

  var firstChar = sentence.charAt(0).toUpperCase();

  var lastChar = sentence.slice(-1);
  if (endingChars.indexOf(lastChar) === -1) {
    sentence += '.';
  }
  return firstChar + sentence.slice(1);
};

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
      phrases: [ { text: this.formatPhrase(newTale.text), isNewParagraph: newTale.isNewParagraph } ]
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

  Tale.findByIdAndUpdate(tale.id, { $push: { phrases : { text: this.formatPhrase(tale.text), isNewParagraph: tale.isNewParagraph } }, updatedDate: new Date() },
      function (err, tale) {
        if (err) {
          callback({ error: 'error updating tale'});
        } else {
          callback(tale);
        }
      });
};

module.exports = TalesManager;

