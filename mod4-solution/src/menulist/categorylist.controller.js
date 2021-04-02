(function () {
'use strict';

angular.module('MenuApp')
.controller('categoryListController', categoryListController);

categoryListController.$inject = ['MenuDataService', 'categorylist'];
  function categoryListController(MenuDataService, categorylist) {
    var categoryListCtrl = this;
    categoryListCtrl.categorylist = categorylist;
  }
})();
