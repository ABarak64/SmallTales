'use strict';

var Manager = require('./talesManager');

function CachedTalesManager(milliseconds) {
  this.millisecondsUntilCacheRefresh = milliseconds;
  this.updatedTalesCache = [];
  this.cacheUpdatedDate = new Date('October 13, 1975 11:13:00');
};

CachedTalesManager.prototype = new Manager();

CachedTalesManager.prototype.getUpdatedTales = function(count, callback) {
  var self = this;
  if (new Date().getTime() - this.cacheUpdatedDate.getTime() > this.millisecondsUntilCacheRefresh) {
    Manager.prototype.getUpdatedTales(count, function(data) {
      self.updatedTalesCache = data;
      self.cacheUpdatedDate = new Date();
      callback(self.updatedTalesCache);
    });
  } else {
    callback(this.updatedTalesCache);
  }
};

module.exports = CachedTalesManager;