angular.module('counterApp', []);

angular.module('counterApp')
  .controller('counterCtrl', function() {
  var limit = 10;
  
  this.reset = function() {
    this.count = 0;
  };
  
  this.reset();
  
  this.increment = function() {
    this.count +=1;
  };
  
  this.decrement = function() {
    this.count -=1;
  };
  this.isLimitExceeded = function() {
    return this.count >= limit;
  };
  this.countIsZero = function() {
    return this.count === 0;
  };
  
});