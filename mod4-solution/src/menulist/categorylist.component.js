(function () {
  'use strict';

angular.module('MenuApp')
  .component('categoryList', {
    templateUrl: 'src/menulist/templats/main-categorylist.template.html',
    bindings: {
      items: '<'
    }
  });
})();
