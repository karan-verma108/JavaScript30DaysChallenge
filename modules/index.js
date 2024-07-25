import lodash from 'lodash';
import axios from 'axios';
import { addition } from './addModule.js';
import { personObj } from './objModule.js';
import { multiply, findLeapYear, isPalindrome } from './multipleFn.js';
import fetchAnyApi from './firstDefaultFn.js';
import {
  year,
  mood,
  createGithubProfile,
  showTime,
} from './multipleConstNFun.js';

/* 1) create a module that exports a function to add two numbers. Import and use this module in another script 
const sumOfTwoNumbers = addition(5, 6);
console.log(`sumOfTwoNumbers is ${sumOfTwoNumbers}`);*/

/* 2) create a module that exports an object representing a person with properties and methods. Import and use this module in another script

console.log(`The retrieved module is ${personObj}`);
console.log(`The name is ${personObj.name}`);
console.log(`The age is ${personObj.age}`);
console.log(`Let's check if he is happy? ${personObj.isHappy(1000, 30)}`); */

/* 3) create a module that exports multiple functions using named exports. Import and use these functions in another script

// let's try these methods
// first, multiply method

const multiplyResult = multiply(3, 9);
console.log(`multiplyResult is ${multiplyResult}`);

// second, findLeapYear function

const findLeapYearResult = findLeapYear(1700);
console.log(`findLeapYear result is ${findLeapYearResult}`);

// third, isPalindrome function

const isPalindromeResult = isPalindrome('meau');
console.log(`isPalindrome result is ${isPalindromeResult}`); */

/* 4) create a module that exports a single function using default export. Import and use this function in another script

// let's try this fetch api method that is imported from another module

fetchAnyApi('https://jsonplaceholder.typicode.com/users')
  .then((data) => {
    console.log('data ', data);
  })
  .catch((err) => {
    console.log(err);
  }); */

//   5) create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties

const key1 = year;
const key2 = mood;
const key3 = createGithubProfile;
const key4 = showTime;

const newObj = {
  key1,
  key2,
  key3,
  key4,
};

// console.log('newobj', newObj.key4());

// 6) install a third party module lodash using npm. Import and use a function from this module in a script

// using a function isArray from lodash

const notArray = '123';
const result = lodash.isArray(notArray);
// console.log(`is notArray an array ? ${result}`);

// 7) install a third party module axios using npm. Import and use this module to make a network request in a script

const letsFetchApiAgain = async () => {
  try {
    const data = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log('data is', data);
  } catch (error) {
    console.log(error);
  }
};

letsFetchApiAgain();

// 8) use a module bundler like webpack or parcel to bundle multiple javascript files into a single file. Write a script to demonstate the bundling process
