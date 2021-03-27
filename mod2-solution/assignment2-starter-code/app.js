(function() {
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service("ShoppingListCheckOffService", ShoppingListCheckOff);

ToBuyController.$inject = [ 'ShoppingListCheckOffService'];
  function ToBuyController( ShoppingListCheckOffService) {
    var tbc = this;
    tbc.items = ShoppingListCheckOffService.tobuy();

    tbc.bought = function(itemIndex) {
      ShoppingListCheckOffService.removeandpush(itemIndex);
    }
  }

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var abc = this;

    abc.boughtitems = ShoppingListCheckOffService.alreadybought();
  }

function ShoppingListCheckOff() {
  var service = this;
  var bought = [];
  var items = [
    {"name": "Eggs", quantity: "1 dozen"},
    {"name": "Chocolate Chips", quantity: "16 oz"},
    {"name": "Brown Sugar", quantity: "1 bag"},
    {"name": "Pecans", quantity: "8 oz bag"},
    {"name": "Sugar", quantity: "5 lb bag"},
    {"name": "Vanilla", quantity: "4 oz bottle"},
    {"name": "Flour", quantity: "5 lb bag All Purpose"},
    {"name": "Butter", quantity: "2 sticks"},
    {"name": "Milk", quantity: "1 gallon"}];
  service.tobuy = function() {
    return items;
  }
  service.removeandpush = function(itemIndex) {
    var tempItem = {
      "name": items[itemIndex].name,
      "quantity": items[itemIndex].quantity
    }
    items.splice(itemIndex, 1);
    bought.push(tempItem);
  }
  service.alreadybought = function() {
    return bought;
  }
}

})();
