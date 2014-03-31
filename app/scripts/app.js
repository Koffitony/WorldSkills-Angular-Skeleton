'use strict';

angular
  .module('worldSkillsAppApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'pascalprecht.translate'
  ])
  .config(['$translateProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider', function ($translateProvider, $stateProvider, $urlRouterProvider, $locationProvider) {

$urlRouterProvider.otherwise('/');

  $translateProvider.useStaticFilesLoader({
    prefix: 'languages/',
    suffix: '.json'
  });

  //$translateProvider.useLocalStorage();

  $translateProvider.preferredLanguage('en_US');


  //routes
  var assessmentCriteriaMenu = {
    templateUrl: 'views/assessmentCriteria.menu.html',
    controller: 'AssessmentcriteriamenuCtrl'
  };

  $stateProvider

  // //index
    .state('index', {
      url: '/',
      templateUrl: 'views/main.html'
    })

   //personnel
   .state('personnel', {
     url: '/personnel',
     templateUrl: 'views/personnel.html',
     controller: 'PersonnelCtrl'
   })

   //assessment
   .state('assessment', {
     url: '/assessment',
     templateUrl: 'views/assessment.html',
     controller: 'AssessmentCtrl'
   })

  //Competition / assessment criteria
  .state('assessmentCriteria', {
    abstract: true,
    url: '/assessmentCriteria',
    templateUrl: 'views/assessmentCriteria.html'
  })

  .state('assessmentCriteria.menu', {
    url: '/assessmentCriteria/menu_:stepName',

    views: {
      'assessmentCriteriaMenu': assessmentCriteriaMenu,
      'assessmentCriteriaContent':{
        templateUrl: function ($stateParams){
          return 'views/assessmentCriteria.' + $stateParams.stepName + '.html';
        },
        controllerProvider: ['$stateParams', function($stateParams){
          //var ctrlName = $stateParams.stepID
          var ctrlName = 'Assessmentcriteria' + $stateParams.stepName + 'Ctrl';
          return ctrlName;
        }]
      }
    }
  })

  .state('vahvistus', {
    url: '/vahvistus/:type/:id',
    templateUrl: function($stateParams){
      return 'views/vahvistus.' + $stateParams.type + '.html';
    },
    controllerProvider: ['$stateParams', function($stateParams){
      var ctrlName = 'Vahvistus'+$stateParams.type+'Ctrl';
      return ctrlName;
    }]
  });


}])
.run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams){
  //DEVELOPMENT API URL
  $rootScope.api_url = "http://localhost:8080/glossary/";
  $rootScope.available_languages = {"en_US":"English", "pt_BR":"Portuguese (Brazil)"};

  //PRODUCTION API URL
  //$rootScope.api_url = "http://beuk.worldskills.org/glossary/";

  // It's very handy to add references to $state and $stateParams to the $rootScope
  // so that you can access them from any scope within your applications.For example,
  // <li ng-class='{ active: $state.includes('contacts.list') }'> will set the <li>
  // to active whenever 'contacts.list' or one of its decendents is active.
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
}]);
