'use strict';

angular.module('vocaApp', ['ui.bootstrap'])
  .controller('categoriesController', categoriesController);

categoriesController.$inject = ['$scope', '$uibModal'];

function categoriesController($scope, $uibModal) {
  $scope.inintData = function(categories) {
    $scope.categories = categories;
  }
}
