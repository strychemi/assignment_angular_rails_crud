pinboard.controller("pinsIndexCtrl",
  ['$scope','Restangular', 'pins', function($scope, Restangular, pins){
    $scope.pins = pins;
  }]

);
