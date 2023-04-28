(function(angular) {
    'use strict';
  var myApp = angular.module('counterModule', []);
  
  myApp.controller('numberController', ['$scope', function($scope) {
      $scope.amount = 0;
  
      $scope.addOne = function() {
          $scope.amount += 1;
      };
  
  }]);
  })(window.angular);