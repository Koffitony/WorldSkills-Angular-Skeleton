'use strict';

angular
  .module('worldSkillsAppApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'pascalprecht.translate'
  ])
  .config(['$translateProvider', '$routeProvider', function ($translateProvider, $routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  $translateProvider.useStaticFilesLoader({
    prefix: 'languages/',
    suffix: '.json'
  });

  //$translateProvider.useLocalStorage();

  $translateProvider.preferredLanguage('en_US');

}])
.run(['$rootScope', function($rootScope){
  //DEVELOPMENT API URL
  $rootScope.api_url = "http://localhost:8080/glossary/";
  $rootScope.available_languages = {"en_US":"English", "pt_BR":"Portuguese (Brazil)"};

  //PRODUCTION API URL
  //$rootScope.api_url = "http://beuk.worldskills.org/glossary/";
}]);
