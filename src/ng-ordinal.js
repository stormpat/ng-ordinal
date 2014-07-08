
(function() {

  angular.module("stormpat.ordinal-indicator", [])
  .directive("nth", function($compile) {

    var Ordinal;

    Ordinal = function(num) {
      this.num = num;
      this.suffixes = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'];
    };

    Ordinal.prototype.addIndicator = function() {
      var number = this.num
        , isNotValid = /^(string|number)$/.test(typeof number) === false
        , match = number.toString().match(/\d$/)
        , suffix;

      if (isNotValid || !match) {
        return number;
      }

      suffix = this.suffixes[match[0]];

      if (/1[123]$/.test(number)) {
        suffix = 'th';
      }

      return [number, suffix].join('');
    };

    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      scope: { item: '=' },
      replace: true,
      template: '<span ng-transclude></span>',
      link: function(scope, elem, attrs) {
        var nth = new Ordinal(scope.item);
        return elem.text(nth.addIndicator());
      }
    }
  });

}());