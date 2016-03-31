var pinboard = angular.module('pinboard', ['ui.router', 'restangular'])

.config(['RestangularProvider', function(RestangularProvider){
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
}])

.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider){

   $stateProvider
     .state('posts', {
       url: '/posts',
       templateUrl: '/templates/postsLayout.html'
     })
     .state('posts.index',{
       url: "/index",
       templateUrl: '/templates/postsIndex.html',
       controller: 'PostsIndexCtrl',
       resolve: {
         posts: ['Restangular', function(Restangular){
           return Restangular.all('posts').getList();
         }]
       }
     })
     .state('posts.show', {
       url: "/:id",
       templateUrl: "/templates/postsShow.html",
       controller: 'PostsShowCtrl',
       resolve: {
         post: ['Restangular', '$stateParams',
                 function(Restangular, $stateParams){
                   return Restangular.one('posts', $stateParams.id).get();
               }]}
     });


     $urlRouterProvider.otherwise('/posts');

 }])

.run(function($rootScope){
 $rootScope.$on("$stateChangeError", console.log.bind(console));
});
