(function () {
'use strict';

angular.module('MenuApp')
 .config(RoutesConfig);

 RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
 function RoutesConfig($stateProvider, $urlRouterProvider) {

   // Redirect to home page if no other url matches
   $urlRouterProvider.otherwise('/');

   // home page
   .state('home', {
     url: '/',
     templateUrl: 'src/menulist/templates/home.template.html'
   })

   // Set up UI states
     .state('categorylist', {
       url: '/category-list',
       templateUrl: 'src/menulist/templates/main-categorylist.template.html',
       controller: 'MainCategoryListController as categoryList',
       resolve: {
         items: ['MenuDataService', function (MenuDataService) {
           return MenuDataService.getAllCategories();
         }]
       }
     })

     .state('items', {
       url: '/items/{category}',
       templateUrl: 'src/menulist/templates/main-itemlist.template.html'
       controller: 'ItemsController as itemsList',
       resolve: {
         items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
           return MenuDataService.getItemsForCategory($stateParams.category);
         }]
       }
     })


 }


})
