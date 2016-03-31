var pinboard = angular.module('pinboard', ['ui.router', 'restangular'])

.config(['$urlRouterProvider', '$stateProvider', 'RestangularProvider',
  function($urlRouterProvider, $stateProvider, RestangularProvider){

   RestangularProvider.setBaseUrl('/api/v1');
   RestangularProvider.setRequestSuffix('.json');
   RestangularProvider.setDefaultHttpFields({
       "content-type": "application/json"
   });
   RestangularProvider.setResponseExtractor( function( response, operation ) {
       return response.data;
   });

   $stateProvider
     .state('pins', {
       url: '/pins',
       templateUrl: '/templates/pinsLayout.html'
     })
     .state('pins.index',{
       url: "/index",
       templateUrl: '/templates/pinsIndex.html',
       controller: 'PinsIndexCtrl',
       resolve: {
         pins: ['Restangular', function(Restangular){
           return Restangular.all('pins').getList();
         }]
       }
     })

     $urlRouterProvider.otherwise('/pins');

 }])

// .run(function($rootScope){
//  $rootScope.$on("$stateChangeError", console.log.bind(console));
// });
