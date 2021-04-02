(function () {
  'use strict';

angular.module('Data')
   .service('MenuDataService', MenuDataService)

MenuDataService.$inject = ['$http, 'ApiBasePath']
function MenuDataService($http, ApiBasePath) {
  var service = this;

 service.getAllCategories = function () {
   var response = $http({
     method: "GET",
     url: (ApiBasePath + "/categories.json")
   }).then(function (response) {
     return response.data;
   });
 };
};
})();
