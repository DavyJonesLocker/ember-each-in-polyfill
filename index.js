/* jshint node: true */
'use strict';

var VersionChecker = require('ember-cli-version-checker');

module.exports = {
  name: 'ember-each-in-polyfill',

  init: function() {
    var checker = new VersionChecker(this);
    this._checkerForEmber = checker.for('ember', 'bower');
  },

  treeFor: function() {
    if (this._checkerForEmber.lt('2.0.0-beta.1')) {
      return this._super.treeFor.apply(this, arguments);
    } else if (this.parent === this.project) {
      console.warn('ember-each-in-polyfill is not required for Ember 2.0.0 and later (a default `each-in` keyword is included with Ember), please remove from your `package.json`.');
    }
  }
};
