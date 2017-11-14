var assert = require('assert');
var expect = require("chai").expect;
var stack = require("../ObStack.js");

describe("ObStack", function(){
  describe("push", function(){
    it("adds an item to a stack", function(){
      var s = stack.main();
      s.items.push(1);

      expect(s.items.length).to.deep.equal(1);
    });
  })
  describe("pop", function(){
    it("removes an item from a stack", function(){
        var s = stack.main();
        s.items.push(1);
        s.items.pop()
  
        expect(s.items.length).to.deep.equal(0);
      });
  });
});