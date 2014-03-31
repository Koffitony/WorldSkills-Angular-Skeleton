'use strict';

angular.module('worldSkillsAppApp')
  	.controller('AssessmentcriteriamenuCtrl', ['$scope', '$translate', '$state', '$stateParams', 'Language', function ($scope, $translate, $state, $stateParams, Language) {
    $scope.selectedLanguage = Language.selectedLanguage;
    $scope.selectedMenu = $stateParams.stepName;
  }]);


