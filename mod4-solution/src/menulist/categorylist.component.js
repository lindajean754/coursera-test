(function () {
  'use strict';

angular.module('MenuApp')
  .component('categoryList', {
    templateUrl: 'src/menulist/templats/categorylist.component.html',
    bindings: {
      items: '<'
    }
  });
})();
