pinboard.controller("pinsIndexCtrl",
  ['$scope','Restangular', 'pins', 'pinService', function($scope, Restangular, pins, pinService){
    $scope.pins = pins;
    
    $scope.addPin = function(pinData) {
      pinService.addPin(pinData);
    }

    $scope.postPin = function() {
      
      var newPin = {};
      
      newPin.item_name = $scope.item_name;
      newPin.description = $scope.description;
      newPin.ibuy_sell = $scope.buy_sell;
      newPin.user_id = 1;

      newPin = JSON.stringify(newPin); 
      Restangular.all('pin').post(newPin).then(function(response) {
        var newPin = {};
        console.log(response);
      });
    }

  }]
);
