pinboard.controller("pinEditCtrl",
  ['$scope','$stateParams', 'Restangular', function($scope, $stateParams, Restangular){

    $scope.showPin = $stateParams.pinObj;
    $scope.item_name = $scope.showPin.item_name;
    $scope.description = $scope.showPin.description;
    $scope.user_id = $scope.showPin.user_id;


    $scope.updatePin = function() {

      var newPin = {};
      newPin.id = $scope.showPin.id;
      newPin.item_name = $scope.item_name;
      newPin.description = $scope.description;
      newPin.buy_sell = $scope.buy_sell;
      newPin.user_id = $scope.user_id;
      Restangular.one('pins/' + $scope.showPin.id).patch(newPin).then(function(response) {
      });
    };

  }]
);
