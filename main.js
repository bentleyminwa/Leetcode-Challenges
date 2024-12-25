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
console.log(filtered);
