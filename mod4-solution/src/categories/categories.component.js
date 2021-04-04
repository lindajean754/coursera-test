(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categoriesList',
        {
            templateUrl: 'src/categories/categorieslist.template.html',
            bindings: {
                categories: '<',
                categoriessn: '<'
            }
        })
})();
