describe('directive: ng-ordinal 1st', function() {
  var element, scope;

  beforeEach(module('stormpat.ordinal-indicator'));

  beforeEach(inject(function($rootScope, $compile) {

    scope = $rootScope.$new();
    element = '<nth item="number"></nth>';
    scope.number = 1;
    element = $compile(element)(scope);
    scope.$digest();

  }));

  it("should show that there is a 1st", function() {
    expect(element.html()).toBe('1st');
  });

});

describe('directive: ng-ordinal 2nd', function() {
  var element, scope;

  beforeEach(module('stormpat.ordinal-indicator'));

  beforeEach(inject(function($rootScope, $compile) {

    scope = $rootScope.$new();
    element = '<nth item="number"></nth>';
    scope.number = 2;
    element = $compile(element)(scope);
    scope.$digest();

  }));

  it("should show that there is a 2nd", function() {
    expect(element.html()).toBe('2nd');
  });

});

describe('directive: ng-ordinal 3rd', function() {
  var element, scope;

  beforeEach(module('stormpat.ordinal-indicator'));

  beforeEach(inject(function($rootScope, $compile) {

    scope = $rootScope.$new();
    element = '<nth item="number"></nth>';
    scope.number = 3;
    element = $compile(element)(scope);
    scope.$digest();

  }));

  it("should show that there is a 3rd", function() {
    expect(element.html()).toBe('3rd');
  });

});

describe('directive: ng-ordinal 4th', function() {
  var element, scope;

  beforeEach(module('stormpat.ordinal-indicator'));

  beforeEach(inject(function($rootScope, $compile) {

    scope = $rootScope.$new();
    element = '<nth item="number"></nth>';
    scope.number = 4;
    element = $compile(element)(scope);
    scope.$digest();

  }));

  it("should show that there is a 4th", function() {
    expect(element.html()).toBe('4th');
  });

});

describe('directive: ng-ordinal return original value', function() {
  var element, scope;

  beforeEach(module('stormpat.ordinal-indicator'));

  beforeEach(inject(function($rootScope, $compile) {

    scope = $rootScope.$new();
    element = '<nth item="number"></nth>';
    scope.number = "IM NOT A NUMBER";
    element = $compile(element)(scope);
    scope.$digest();

  }));

  it("should return string if not a valid number", function() {
    expect(element.html()).toBe('IM NOT A NUMBER');
  });

});