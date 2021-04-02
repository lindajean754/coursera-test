(function () {
  'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menulist/templates/main-itemlist.template.html',
  bindings: {
    items: '<'
  }
});
})();
