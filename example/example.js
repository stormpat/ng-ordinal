
var app = angular.module("app", ["stormpat.ordinal-indicator"]);

app.controller("ExampleCtrl", function($scope) {

  $scope.formulaResults = {
    car1: {
      name: 'Jack',
      position: 4
    },
    car2: {
      name: 'Bob',
      position: 2
    },
    car3: {
      name: 'Sam',
      position: 21
    },
    car4: {
      name: 'Olavi Penttiä-Alahirmu-koskinen ("aka Kossu Koskinen")',
      position: 1
    },
    car5: {
      name: 'Mr certain crash',
      position: "Did not finish"
    },
  }

});