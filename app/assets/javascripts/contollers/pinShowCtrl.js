pinboard.controller("pinShowCtrl",
  ['$scope','$stateParams', function($scope, $stateParams){

    $scope.showPin = $stateParams.pinObj;
    console.log($scope.showPin);
  }]
);
