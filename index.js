'use strict';
var fs = require('fs');

module.exports = exports = function isExistingFolder(filepath, cb) {
  fs.stat(filepath, function (err, stats) {
    if (err) {
      return cb(false);
    }
    return cb(stats.isDirectory());
  });
};
