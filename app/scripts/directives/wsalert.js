'use strict';

/**
 * @ngdoc directive
 * @name worldSkillsApp.directive:WSAlert
 * @description
 * # WSAlert
 */
angular.module('worldSkillsApp')
  .directive('alerts', function (WSAlert) {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'views/wsalert.html',
      link: function($scope, element, attrs) {
      	$scope.WSAlert = WSAlert;
      	$scope.close = function(index){
      		WSAlert.messages.splice(index, 1);
      	};
      	WSAlert.setAllDisplayed();        
      }
    };
  });
