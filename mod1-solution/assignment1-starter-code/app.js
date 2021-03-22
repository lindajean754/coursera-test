(function () {
'use strict';

angular.module('LunchCheck', []) //defines main app //

.controller('LunchCheckController', LunchCheckController)

LunchCheckController.$inject =['$scope'];
  function LunchCheckController($scope) {
   $scope.dish = "";
   $scope.message = "";
   $scope.result = "";

   $scope.dishCount = function () {
     var input = $scope.dish;
     input = input.trim();
     if (input == "") {
       $scope.message = "You gotta enter some food names first and please don't forget to separte them with commas."
       $scope.result = "error";
     } else {
       var inputarr = input.split(",");
       for (var i = 0; i< inputarr.length;i++) {
         if (inputarr[i] === "" || inputarr[i] === " ") {
           $scope.message = "Do not consider an empty item";
           $scope.result = "error";
           break;
         }
         else {
           if (inputarr.length <= 3) {
              $scope.message = "Enjoy!";
              $scope.result = "success"; }
                else {
                  $scope.message = "Too much!";
                  $scope.result = "success";
                }
              }
            }
          }
       }
};
})();
