pinboard.factory("pinService", [ "Restangular",
  function(Restangular){

      // Angular JS backend stuff
      var pins = [];

      var addPin = function(pinData) {
        pins.push(pinData);
      };

      var getAllPins = function() {
        return pins;
      };

      var getPin = function(pinData) {
        return pins[pins.indexOf(pinData)];
      };

      var deletePin = function(pinData) {
        return pins.splice(pins.indexOf(pinData),1);
      };

      // API CALLS

      var getAllPinsApi = function() {
        pins = Restangular.all('pins').getList().$object;
        return pins;
      };

      var createPinApi = function(itemName, description, buySell, userId) {
        var newPin = {
          item_name: itemName,
          description: description,
          buy_sell: buySell,
          user_id: userId
        };

        Restangular.all('pins').post(newPin)
          .then(
            function(response) {
              addPin(response);
            },
            function(reponse) {
              console.log("ERROR POST REQUEST NO WORK.");
          });
      };

      return {
        addPin: addPin,
        deletePin: deletePin,
        getAllPins: getAllPins,
        getPin: getPin,
        getAllPinsApi: getAllPinsApi,
        createPinApi: createPinApi
      };
  }
]);
