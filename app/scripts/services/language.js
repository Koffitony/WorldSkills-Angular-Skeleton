'use strict';

angular.module('worldSkillsAppApp')
  .service('Language', function Language() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var LanguageService = {
			selectedLanguage: 'en_US'	//defaults to en_US
    };

    return LanguageService;
  });
