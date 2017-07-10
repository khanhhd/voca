'use strict';

angular.module('vocaApp')
  .controller('categoriesController', categoriesController);

categoriesController.$inject = ['$scope'];

function categoriesController($scope) {
  $scope.inintData = function(categories) {
    $scope.categories = categories;
  }
}
