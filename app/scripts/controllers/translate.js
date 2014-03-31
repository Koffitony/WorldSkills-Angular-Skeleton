'use strict';

angular.module('worldSkillsAppApp')
	.controller('TranslateCtrl', ['$translate', '$scope', 'Language', function ($translate, $scope, Language) {

		$scope.selectedLanguage = Language.selectedLanguage;		
		
		$scope.changeLanguage = function(langKey){
			$translate.use(langKey);
			Language.selectedLanguage = langKey;			
			$scope.selectedLanguage = langKey;
		};		

	}]);
