(function () {
'use strict';

angular.module('MenuApp')
  .controller('ItemsController, ItemsController');

ItemsController.$inject = ['items'];
  function itemsController(items) {
    var itemsCtrl = this;
    itemsCtrl.items = items;
}
})();
