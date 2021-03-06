'use strict';

require('mocha');
var assert = require('assert');
var Base = require('base');
var base;

var project = require('./');

describe('base-project', function() {
  describe('plugin', function() {
    it('should export a function', function() {
      assert.equal(typeof project, 'function');
    });

    it('should register as a plugin', function() {
      base = new Base();
      base.isApp = true;
      base.use(project());
      assert(base.registered.hasOwnProperty('base-project'));
    });

    it('should expose a project getter/setter', function() {
      base = new Base();
      base.isApp = true;
      base.use(project());
      assert.equal(typeof base.project, 'string');
    });

    it('should set the name of the project', function() {
      base = new Base();
      base.isApp = true;
      base.use(project());
      assert.equal(base.project, 'base-project');
    });

    it('should allow a validation fn to be defined', function() {
      base = new Base();
      base.use(project(function(app) {
        return app.isFoo;
      }));
      assert(!base.project);

      base.isFoo = true;
      base.use(project(function(app) {
        return app.isFoo;
      }));
      assert.equal(base.project, 'base-project');
    });
  });
});
