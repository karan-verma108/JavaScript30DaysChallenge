// 1) write a program to check if a number is even or odd

const isEvenOrOdd = (num) => {
  let result;
  if (num <= 0) {
    result = `Please enter a number greater than 0`;
  } else {
    result =
      num % 2 === 0
        ? (result = `num ${num} is even`)
        : (result = `num ${num} is odd`);
  }
  return result;
};

const isEvenOrOddResult = isEvenOrOdd(2);
// console.log(isEvenOrOddResult);

// 2) write a program to calculate the square of a number

const squareOfNumber = (num) => {
  let result;
  if (num <= 0) {
    result = `Please enter a number greater than 0`;
  } else {
    result = `The square of the number ${num} = ${num ** 2}`;
  }
  return result;
};

const squareOfNumberResult = squareOfNumber(2);
// console.log(squareOfNumberResult);

// 3) write a function expression to calcualte the maximum of two numbers

const maxOfTwo = (num1, num2) => {
  let result;
  if (num1 > num2) {
    result = `The max value out of ${num1} and ${num2} is ${num1}`;
  } else {
    result = `The max value out of ${num1} and ${num2} is ${num2}`;
  }
  return result;
};

const maxOfTwoResult = maxOfTwo(-32, 0);
// console.log(maxOfTwoResult);

// 4) write a function expression to concatenate two strings

const concateTwoStr = (str1, str2) => {
  let result;
  if (typeof str1 !== 'string' && typeof str2 !== 'string') {
    result = `Please enter at least one value as string`;
  } else {
    result = `The concatenated outcome is ${str1 + str2}`;
  }
  return result;
};

const concateTwoStrResult = concateTwoStr('javascript', 4);
// console.log(concateTwoStrResult);

// 5) write an arrow function to calculate the sum of two numbers

const sum = (num1, num2) => {
  let result;
  if (isNaN(num1) || isNaN(num2)) {
    result = `Please enter numbers only`;
  } else {
    result = num1 + num2;
  }
  return result;
};

const sumResult = sum(3, 'hello');
// console.log(sumResult);

// 6) write an arrow function to check if a string contains a specific character

const checkCharacter = (myStr, character) => {
  let result;
  let atIndex;
  if (typeof myStr === 'string' && typeof character === 'string') {
    result = myStr.includes(character);
    atIndex = myStr.indexOf(character);
  } else {
    result = `Please enter only string value`;
  }
  if (result !== true) {
    return `Please enter only string value`;
  } else {
    return `string ${myStr} contains the character ${character} at index ${atIndex}`;
  }
};

const checkCharacterResult = checkCharacter('json', 'o');
// console.log(checkCharacterResult);

// 7) write a function that takes two paramaters and returns their product. Provide a default value to second parameter

const sumOfTwo = (num1, num2 = 3) => {
  let result;
  if (
    typeof num1 !== 'number' ||
    typeof num2 !== 'number' ||
    isNaN(num1) ||
    isNaN(num2)
  ) {
    result = `Please enter only numbers`;
  } else {
    result = num1 * num2;
  }
  return result;
};

const sumOfTwoResult = sumOfTwo(4);
// console.log(sumOfTwoResult);

// 8)  write a program that takes a person's name and age and returns a greeting messasge. Provide a default value for age

const greet = (personName, personAge = 20) => {
  let result;
  if (
    typeof personName !== 'string' ||
    typeof personAge !== 'number' ||
    isNaN(personAge)
  ) {
    result = 'Please provide appropriate inputs';
  } else {
    result = `Welcome ${personName} who is ${personAge} years old!`;
  }
  return result;
};

const greetResult = greet('roy'); //we can override default value of age here
// console.log(greetResult);

// 9) write a higher order function that takes a function and a number, and calls the function that many times

const personalGreet = () => {
  console.log(
    'Appun hai ek paramter vala function kya!, jo as a parameter pass hoga to a higher order function :)'
  );
};

const papaFunction = (bacchaFunction, num) => {
  if (typeof num !== 'number' || isNaN(num)) {
    console.log(
      'yar ab mazak mt kr, ye typescript nhi javascript hai alag se code likhna padta hai check krne ke liye'
    );
  } else {
    for (let i = 0; i < num; i++) {
      bacchaFunction();
    }
  }
};

// papaFunction(personalGreet, 5);

// 10) write a higher order function that takes two functions and a value, applies the first function to the value, and applies the second function to the result

const firstFun = (value) => {
  return value;
};

const secondFun = (valueFromFirstFun) => {
  const sum = 1 + valueFromFirstFun;
  console.log(`sum is ${sum}`);
};

const dadaFunction = (firstBaccha, secondBaccha, value) => {
  secondBaccha(firstBaccha(value));
};

dadaFunction(firstFun, secondFun, 23);
