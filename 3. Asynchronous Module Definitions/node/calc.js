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

module.exports = {
  add: function (x, y) {
    return new Calc(x).add(y || 0);
  },
  multiply: function (x, y) {
    return new Calc(x).multiply(y || 1);
  }
};