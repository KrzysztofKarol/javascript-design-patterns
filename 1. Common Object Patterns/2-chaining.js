var Calc = function (initialValue) {
  var value = initialValue || 0;
  var that = this;

  this.add = function (addend) {
    value += addend;
    return that;
  };

  this.multiply = function (factor) {
    value *= factor;
    return that;
  };

  this.equals = function (callback) {
    callback(value);
    return that;
  };
};

new Calc(0)
    .add(1)
    .add(2)
    .multiply(3)
    .equals(function (result) {
      console.log(result);
    })
    .multiply(3)
    .equals(function (result) {
      console.log(result);
    });