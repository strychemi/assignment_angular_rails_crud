pinboard.factory("pinService",
  function(){
      var pin = {};
      var pins = [];

      var addPin = function(pinData) {
        pins.push(pinData);
      }  

      var getPins = function() {
        return pins;
      }

      var getPin = function(pinData) {
        return pins[pins.indexOf(pinData)];
      }

      var deletePin = function(pinData) {
        return pins.splice(pins.indexOf(pinData),1);
      }

      return {
        addPin: addPin,
        deletePin: deletePin,
        getPins: getPins,
        addPin: addPin
      }
  }
);
