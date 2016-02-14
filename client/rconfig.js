var require = {
  waitSeconds: 0,
  paths: {
    'jquery': './bower_components/jquery/dist/jquery.min',
    'bootstrap': './bower_components/bootstrap/dist/js/bootstrap.min',
    'angular': './bower_components/angular/angular.min',
    'angular-animate': './bower_components/angular-animate/angular-animate.min',
    'domReady': './bower_components/requirejs-domready/domReady',
    'angular-ui-router': './bower_components/angular-ui-router/release/angular-ui-router.min',
    'angular-bootstrap': './bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
    'angular-couch-potato': './bower_components/angular-couch-potato/dist/angular-couch-potato',
    'jquery-datatables': './bower_components/datatables/media/js/jquery.dataTables.min',
    'datatables-bootstrap': './bower_components/datatables/media/js/dataTables.bootstrap.min',

    'modules-includes': 'includes',

    'dark-velvet': './js/darkvelvet'
  },
  shim: {
    'angular': {'exports': 'angular', deps: ['jquery']},
    'angular-animate': { deps: ['angular'] },
    'angular-bootstrap': { deps: ['angular'] },
    'angular-ui-router': { deps: ['angular'] },
    'angular-couch-potato': { deps: ['angular'] },
    'jquery-datatables': { deps: ['jquery'] },
    'datatables-bootstrap': { deps: ['jquery-datatables'] },

    'modules-includes': { deps: ['angular']},

    'dark-velvet': {deps: ['jquery']}
  },
  priority: [
    'jquery',
    'bootstrap',
    'angular'
  ]
}
