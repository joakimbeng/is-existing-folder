'use strict';
var path = require('path');
var test = require('tape');

var isExistingFolder = require('./');

test('isExistingFolder for files', function (assert) {
  isExistingFolder(__filename, function (val) {
    assert.equal(val, false, 'It should be false');
    assert.end();
  });
});

test('isExistingFolder for non existing folders', function (assert) {
  isExistingFolder(path.join(__dirname, 'aksdjalksdjalksdjlak'), function (val) {
    assert.equal(val, false, 'It should be false');
    assert.end();
  });
});

test('isExistingFolder for existing folders', function (assert) {
  isExistingFolder(__dirname, function (val) {
    assert.equal(val, true, 'It should be true');
    assert.end();
  });
});
