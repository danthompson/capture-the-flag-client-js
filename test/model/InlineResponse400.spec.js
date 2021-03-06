/**
 * Capture the Flag
 * A friendly game of Capture the Flag
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: hello@testdouble.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GameClient);
  }
}(this, function(expect, GameClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GameClient.InlineResponse400();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse400', function() {
    it('should create an instance of InlineResponse400', function() {
      // uncomment below and update the code to test InlineResponse400
      //var instane = new GameClient.InlineResponse400();
      //expect(instance).to.be.a(GameClient.InlineResponse400);
    });

    it('should have the property error (base name: "error")', function() {
      // uncomment below and update the code to test the property error
      //var instane = new GameClient.InlineResponse400();
      //expect(instance).to.be();
    });

  });

}));
