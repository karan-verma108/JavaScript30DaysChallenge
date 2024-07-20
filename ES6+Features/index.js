// 1) use template literals to create a string that includes variables for a person's name and age, log the string to console

const person = {
  personName: 'roy',
  personAge: 99,
};

console.log(
  `The name of the person is ${person.personName} and age is ${person.personAge}`
);

// 2) create a multi-line string using template literals and log it to the console

const myLongStr = `today is my 8th day of practising javascript. I'm doing these challenges given by Chai or code (Hitesh sir)
currently writing this multi line string using template literals to see what is shows in console so
now let's see`;

console.log(myLongStr);

// 3) use array destructuring to extract the first and second elements from an array of numbers and log them to console

const numArr = [2, 4, 6, 8];
const [num1, num2] = numArr;
console.log(`first element is ${num1} and second is ${num2}`);

// 4) use object destructuring to extract the title and author from book object and log them to console

const myLibrary = {
  title: 'bete mauj krdi!',
  author: 'raju',
  price: 150,
};

const { title, author } = myLibrary;
console.log(`Title of the book is ${title} and author is ${author}`);

// 5) use the spread operator to create a new array that includes all Elements of an existing array plus additional elements and log the new array

const oldArr = ['tere', 'liye', 'ghumu'];
const newArr = [...oldArr, 'diwana', 'banke'];
console.log(`The new array after using spread operator is ${newArr}`);

// 6) use the rest operator in a function to accept an arbitrary number of arguments, sum them & return the result

const sumUsingRest = (...allNums) => {
  let sum = 0;
  for (nums of allNums) {
    sum += nums;
  }
  return sum;
};

const sumUsingRestResult = sumUsingRest(3, 4, 5, 100);
console.log(sumUsingRestResult);

// 7) write a function that takes two parameters and returns their product, with second paramter having a default value of 1. Log the result of calling this function without the second parameter

const newFun = (param1, param2 = 1) => {
  return param1 * param2;
};

const newFunResult = newFun(4);
console.log(newFunResult);

// 8) use enhanced object literals to create an object with methods and properties, log the object to console

// // let personName = 'javascript';
// // let personWork = 'developer';
// const enhancedObj = {
//   personName: 'javascript',
//   personWork: 'developer',
//   chhapResult() {
//     console.log(
//       `I'm able to access personName : ${personName} and personWork : ${personWork}`   //this was not possible without enhanced object literlas
//     );
//   },
// };

// enhancedObj.chhapResult();

let personName = 'javascript';
let personWork = 'developer';
const enhancedObj = {
  personName,
  personWork,
  chhapResult() {
    console.log(
      `I'm able to access personName : ${personName} and personWork : ${personWork}` //this is possible due to enhanced object literlas
    );
  },
};

enhancedObj.chhapResult();

// 9) create an object with computer property names based on varaibles and log the object to console

const key = 'secondName';
const value = 'cena';
const property1 = {
  firstName: 'john',
  [key]: value,
};

console.log(property1.secondName);
