## Angularjs Ordinal

Display results as ordinal numbers. Meaning; if you display results from a competition,
or race you probably want to show them as ```1st, 2nd, 3rd, 4th etc```. With this tiny module
you can do it easily.

### Usage

Grab the [ng-ordinal.js](https://github.com/stormpat/Ordinal/blob/master/src/ng-ordinal.js) module
(written as a directive) and give you HTML a new element.

```html
<div ng-controller="ExampleCtrl">
  <nth item="position"></nth>
</div>
```

Or you can loop thru the results object/array.

```html
<div ng-controller="ExampleCtrl">
    <div ng-repeat="driver in formulaResults">
      <h3>{{driver.name}}</h3> Finished: <strong><nth item="driver.position"></nth></strong>
    </div>
</div>
```
Use angulars DI to inject the module, then give the ```formulaResults``` (or call it what you want) variable a value from your app.

```js
// Example in a controller.
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
      position: 3
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
```

### Roadmap

  - Allow internationalization.
  - Add to bower.

### License

MIT.

