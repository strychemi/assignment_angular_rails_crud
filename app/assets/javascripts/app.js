var pinboard = angular.module('pinboard', ['ui.router', 'restangular'])

.config(['$urlRouterProvider', '$stateProvider', 'RestangularProvider',
  function($urlRouterProvider, $stateProvider, RestangularProvider){

   RestangularProvider.setBaseUrl('/api/v1');
   RestangularProvider.setRequestSuffix('.json');
   RestangularProvider.setDefaultHttpFields({
       "content-type": "application/json"
   });

   $stateProvider
      .state('pins', {
        url: '/pins',
        abstract: true,
        views: {
         '': {
            url: '',
            templateUrl: '/templates/pinsLayout.html'
          }
        }
      })
     .state('pins.index',{
       url: '',
       templateUrl: '/templates/pinsIndex.html',
       controller: 'pinsIndexCtrl',
       resolve: {
         pins: ['Restangular', function(Restangular){
           return Restangular.all('pins').getList().$object;
         }]
       }
     });

     $urlRouterProvider.otherwise('/pins');

 }]);

// .run(function($rootScope){
//  $rootScope.$on("$stateChangeError", console.log.bind(console));
// });
