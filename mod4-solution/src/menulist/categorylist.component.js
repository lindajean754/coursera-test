(function () {
  'use strict';

angular.module('MenuApp')
  .component('categoryList', {
    templateUrl: 'templats/categorylist.template.html',
    bindings: {
      items: '<'
    }
  });
})();
