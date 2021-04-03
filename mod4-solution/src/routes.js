(function () {
'use strict';

angular.module('MenuApp')
 .config(RoutesConfig);

 RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
 function RoutesConfig($stateProvider, $urlRouterProvider) {
   // Redirect to home page if no other url matches
   $urlRouterProvider.otherwise('/');

   // Set up UI states
   $stateProvider
   // home page
   .state('home', {
     url: '/menulist/templates/home',
     templateUrl: 'src/menulist/templates/home.html'
   })

   .state('categories', {
       url: '/categories',
       templateUrl: 'src/menulist/templates/categories.html',
       controller: 'categoriesController as categories',
       resolve: {
         categories: ['MenuDataService', function (MenuDataService) {
           return MenuDataService.getAllCategories();
         }]
       }
     })

   .state('items', {
       url: '/items/{categoryShortName}',
       templateUrl: 'src/menulist/templates/items.html',
       controller: 'itemsController as items',
       params: {
         categoryShortName: null,
         categoryName: null
       },
       resolve: {
         items: ['$stateParams', 'MenuDataService',  function ($stateParams, MenuDataService) {
           return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
         }]
       }
     });

 }

})();
