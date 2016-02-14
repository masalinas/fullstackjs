define(['modules/master/module'], function (module) {
  "use strict";

  module.registerController('ProductMasterCtrl', ['$scope', '$log', function ($scope, $log) {
    $(".view").css("min-height", $(window).height() - $('.header').height() - 100);
  }])
});
