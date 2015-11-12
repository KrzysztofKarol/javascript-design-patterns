function myFunc(a, b, c) {
  return a + b + c;
}

console.log(myFunc(1, 2, 3)); // 6
console.log(myFunc(1, 2, 3, 4)); // 6
console.log(myFunc(1, 2)); // NaN


function myFunc2() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(myFunc2(1, 2, 3)); // 6
console.log(myFunc2(1, 2, 3, 4)); // 10
console.log(myFunc2(1, 2)); // 3