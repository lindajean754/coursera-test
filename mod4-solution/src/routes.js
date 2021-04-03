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

   .state('categorylist', {
       url: '/categorylist',
       templateUrl: 'menulist/templates/categorylist.template.html',
       controller: 'categoryListController as categoryListCtrl',
       resolve: {
         categoryList: ['MenuDataService', function (MenuDataService) {
           return MenuDataService.getAllCategories();
         }]
       }
     })

   .state('items', {
       url: '/categoryList/{categoryShortName}',
       templateUrl: 'menulist/templates/itemlist.template.html',
       controller: 'itemsController as itemsCtrl',
       params: {
         categoryShortName: null,
         categoryName: null
       },
       resolve: {
         items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
           return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
         }]
       }
     });

 }

})();
