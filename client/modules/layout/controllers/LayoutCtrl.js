define(['modules/layout/module'], function (module) {
  "use strict";

  module.registerController('LayoutCtrl', ['$scope', '$state', '$log', function ($scope, $state, $log) {
    // initialize the view layout
    $state.go('app.dashboard');
  }])
});
