pinboard.controller("pinsIndexCtrl",
  ['$scope','Restangular', 'pins', 'pinService', function($scope, Restangular, pins, pinService){

    $scope.pins = pins;
    pinService.getAllPinsApi();

    $scope.createPinApi = function() {
      console.log("Hi");
      pinService.createPinApi($scope.item_name, $scope.description, $scope.buy_sell, 1);
      $scope.item_name = "";
      $scope.description = "";
      $scope.buy_sell = true;
      $scope.pins = pinService.getAllPins();
    };

  }]
);
