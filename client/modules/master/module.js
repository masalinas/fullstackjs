define(['angular',
        'angular-couch-potato',
        'angular-ui-router'], function(ng, couchPotato){

  var module = angular.module('app.modules.master', ['ui.router']);

  couchPotato.configureApp(module);

  module.config(function($stateProvider, $couchPotatoProvider, $urlRouterProvider) {
    $stateProvider
      .state('app.modules.master', {
        abstract: true,
        data: {
          title: 'Master Elements'
        }
      })
      .state('app.modules.master.product', {
        url: '/master/product',
        data: {
          title: 'Product Master'
        },
        views: {
          "content@app": {
            templateUrl: 'modules/master/views/product-master.html',
            controller: 'ProductMasterCtrl',
            resolve: {
              deps: $couchPotatoProvider.resolveDependencies([
                'modules/master/controllers/ProductMasterCtrl'
              ])
            }
          }
        }
      });
  });

  module.run(function($couchPotato){
    module.lazy = $couchPotato
  });

  return module;
});
