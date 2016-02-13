define(['modules/layout/module'], function (module) {
  "use strict";

  module.registerController('LayoutCtrl', ['$scope', '$log', function ($scope, $log) {
    $scope.test = "TEST";
  }])
});
