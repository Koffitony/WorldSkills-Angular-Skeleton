'use strict';

/**
 * @ngdoc function
 * @name worldSkillsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the worldSkillsApp
 */
angular.module('worldSkillsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
