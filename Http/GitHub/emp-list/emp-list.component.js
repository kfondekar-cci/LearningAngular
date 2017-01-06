'use strict';

// Register `empList` component, along with its associated controller and template
angular.
  module('empList').
  component('empList', {
   templateUrl: 'emp-list/emp-list.template.html',
    controller:['$http', function EmpListController($http) {
      var self = this;
     // self.orderProp = 'age';

    self.setUrl= function setUrl(empid)
    {
      
      $http.get('https://api.github.com/users/'+empid).then(function(response) {
        self.employee = response.data;
     });
    }
    
    }
    ]
  });
