(function () {
  'use strict';

angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'templats/categories.component.template.html',
    bindings: {
      categories: '<'
    }
  });
})();
