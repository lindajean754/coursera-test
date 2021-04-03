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
     url: '/',
     templateUrl: 'menulist/templates/home.template.html'
   })

   .state('categories', {
       url: '/categories',
       templateUrl: 'menulist/templates/categories.template.html',
       controller: 'categoriesController as categoriesCtrl',
       resolve: {
         categories: ['MenuDataService', function (MenuDataService) {
           return MenuDataService.getAllCategories();
         }]
       }
     })

   .state('items', {
       url: '/categories/{categoryShortName}',
       templateUrl: 'menulist/templates/items.template.html',
       controller: 'itemsController as itemsCtrl',
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
