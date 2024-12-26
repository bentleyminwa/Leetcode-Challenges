// ============================== Question 1 ============================== //

// Write a function expect that helps developers test their code.
// It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other.
// If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other.
// If they are equal, it should throw an error "Equal"

// ============================== Solution ============================== //

function expect(val) {
  return {
    toBe: function (val2) {
      if (val !== val2) {
        throw new Error("Not Equal");
      }
      return true;
    },
    notToBe: function (val2) {
      if (val === val2) {
        throw new Error("Equal");
      }
      return true;
    },
  };
}

const result = expect(1).toBe(1); // true
const result2 = expect(1).notToBe(2); // true

// ============================== Question 2 ============================== //

// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.

// ============================== Solution ============================== //

// arr - an array of elements/integers we want to transform
// fn - a mapping function that will be applied to each element
// arr[i] - current element in the array
// i - index of the current element

function mapArray(arr, fn) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(fn(arr[i], i));
  }
  return output;
}

const numbers = [1, 2, 3, 4];

function multiplyBy2(num) {
  return num * 2;
}

const doubled = mapArray(numbers, multiplyBy2); // [2, 4, 6, 8]

// ============================== Question 3 ============================== //

// Given an  array arr and a filtering function fn, return a filtered array filteredArr.
// The fn function takes one or two arguments:
// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value.
// A truthy value is a value where Boolean(value) returns true.
// Please solve it without the built-in Array.filter method.

// ============================== Solution ============================== //

function filterArray(arr, fn) {
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      output.push(arr[i]);
    }
  }
  return output;
}

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function greaterThan5(num) {
  return num > 5;
}

const filtered = filterArray(array1, greaterThan5); // [6, 7, 8, 9]

// ============================== Question 4 ============================== //

// Given an integer array nums, a reducer function fn, and an initial value init,
// return the final result obtained by executing the fn function on each element of the array, sequentially,
// passing in the return value from the calculation on the preceding element.

// This result is achieved through the following operations:
// val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.
// If the length of the array is 0, the function should return init.
// Please solve it without using the built-in Array.reduce method.

// ============================== Solution ============================== //

function reduceArray(nums, fn, init) {
  let output = init;

  for (let i = 0; i < nums.length; i++) {
    output = fn(output, nums[i]);
  }
  return output;
}

const numbers2 = [1, 2, 3, 4, 5];

function add(a, b) {
  // reducer function
  return a + b;
}

const reduced = reduceArray(numbers2, add, 0); // 15

// ============================== Question 5 ============================== //

// Given an array of functions [f1, f2, f3, ..., fn],
// return a new function fn that is the function composition of the array of functions.
// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
// The function composition of an empty list of functions is the identity function f(x) = x.
// You may assume each function in the array accepts one integer as input and returns one integer as output.

// ============================== Solution ============================== //

function compose(functions) {
  // return function (x) {
  //   return functions.reduceRight((acc, fn) => fn(acc), x);
  // };

  // alternatively
  return function (x) {
    for (let fn of functions.reverse()) {
      x = fn(x);
    }
    return x;
  };
}

const composed = compose([(x) => x + 1, (x) => x * x, (x) => x * 2]);
composed(4); // 65
