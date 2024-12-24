// Write a function expect that helps developers test their code.
// It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other.
// If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other.
// If they are equal, it should throw an error "Equal"

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
console.log(doubled);
