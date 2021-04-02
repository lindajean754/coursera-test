<function () {
  'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menulist/templates/main-itemslist.template.html',
  bindings: {
    items: '<'
  }
});
})();
