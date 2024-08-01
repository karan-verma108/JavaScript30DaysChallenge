/* 1) Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

const factorial = (num) => {
  if (num < 0) {
    return 'Please enter number greater than 0';
  }
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

const factorialResult = factorial(5);
console.log(factorialResult);
const factorialResult2 = factorial(1);
console.log(factorialResult2);
const factorialResult3 = factorial(-6);
console.log(factorialResult3); */

/* 2) write a recursive function to find the nth fibonacci number. Log the result for a few test cases

const fibonacci = (num) => {
  if (num === 0 || num === 1) {
    return num;
  }

  return fibonacci(num - 1) + fibonacci(num - 2); //num = 5 
};

const fibonacciResult = fibonacci(6);
const fibonacciResult2 = fibonacci(7);
console.log(fibonacciResult);
console.log(fibonacciResult2); */

/* 3) Write a recusive function to find the sum of all elements in an array.

const findSum = (numArr) => {
  debugger;
  if (numArr.length === 0) {
    return 0;
  }

  return numArr[0] + findSum(numArr.slice(1));
};

const result = findSum([1, 2, 4, 5, 2]);
console.log(result); */

/* 4) Write a recursive function to find the maximum element in an array

const findMaximum = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  }

  const maxRest = findMaximum(arr.slice(1));
  return Math.max(arr[0], maxRest);
};

const result = findMaximum([2, 4, 9, 4, 0, 99, 1, 43]);
console.log(result); */

// 5) Write a recursive function to reverse a String.

const reverseTheString = (myStr) => {
  if (myStr.length === 0) {
    return '';
  }

  const lastChar = myStr[myStr.length - 1];
  const rest = myStr.slice(0, -1);
  const reveresedRest = reverseTheString(rest);
  return lastChar + reveresedRest;
};

const result = reverseTheString('crow');
console.log(result);
