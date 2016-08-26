var myApp = angular.module("myApp", []);

myApp.controller("IndexController", ["$scope", function($scope) {
  console.log('all ready to rock');

  $scope.newEmployee = {};
  $scope.employees = [];
  $scope.salaryTotal = 0;

  $scope.addEmployee = function() {
    $scope.newEmployee.annualSalary = parseInt($scope.newEmployee.annualSalary);
    // calculate monthly salary from employee's annual
    $scope.salaryTotal += Math.round($scope.newEmployee.annualSalary / 12);
    $scope.employees.push($scope.newEmployee);

    // make sure the DOM uses a new empty object
    $scope.newEmployee = {};
  }

  $scope.removeEmployee = function(index) {
    // console.log(employee);
    $scope.salaryTotal -= Math.round(employee.annualSalary / 12);
    $scope.employees.splice(index, 1);
  }
    // $scope.employees.forEach(function(emp, i) {
    //   if(employee.idNumber == emp.idNumber) {
    //     // match!
    //
    //   }
    

}]);
