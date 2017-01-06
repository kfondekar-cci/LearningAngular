angular.
  module('empApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/employees', {
            controller:'EmpListController',
           templateUrl: 'emp-list/emp-list.template.html'
        }).
       
        otherwise('/employees');
    }
  ]);