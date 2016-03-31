pinboard.controller("pinShowCtrl",
  ['$scope','$stateParams', 'Restangular', function($scope, $stateParams, Restangular){

    $scope.showPin = $stateParams.pinObj;
    console.log($scope.showPin);

    $scope.deletePin = function() {
      Restangular.one("pins/" + $scope.showPin.id).remove();
    };
  }]
);
