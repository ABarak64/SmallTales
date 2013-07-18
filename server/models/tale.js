var mongoose = require('mongoose');

var taleSchema = mongoose.Schema({
    title: String,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now },
    phrases: [{ text: String, createdDate: { type: Date, default: Date.now } }]
  });

module.exports = mongoose.model('Tale', taleSchema);