// //write a program to add two, subtract, multiply, divide numbers and also find the remainder when division is performed and log the result to the console

// // ARITHMETIC OPERATIONS

const sum = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = `The sum of two numbers ${num1} ${operator} ${num2} = ${
        num1 + num2
      }`;
      break;
    case '-':
      result = `The subtraction of two numbers ${num1} ${operator} ${num2} = ${
        num1 - num2
      }`;
      break;
    case '*':
      result = `The multiplication of two numbers ${num1} ${operator} ${num2} = ${
        num1 * num2
      }`;
      break;
    case '/':
      result = `The division of two numbers ${num1} ${operator} ${num2} = ${(
        num1 / num2
      ).toFixed(2)}`;
      break;
    case '%':
      result = `The remainder you get when you divide ${num1} from ${num2} is ${
        num1 % num2
      }`;
      break;
    default:
      result = `Please enter a recognisable operator`;
  }
  return result;
};

const finalResult = sum(12, 7, '%');
console.log(finalResult);

// //ASSIGNMENT OPERATORS

// // i) use += operator to add a number to a variable and log the result to the console

let myFavNum = 7;
myFavNum += 2; //this is equal to : myFavNum = myFAvNum(7) + 2;
console.log(myFavNum);

// // i) use -= operator to add a number to a variable and log the result to the console

let mySecondFavNum = 11;
mySecondFavNum -= 4; //this is equal to : mySecondFavNum = mySecondFavNum(11) - 4;
console.log(mySecondFavNum);

// // COMPARISION OPERATORS

// // i) write a program to compare two numbers using >,<, >=, <=, == and === log the result

const compareTwoNumbers = (num1, num2) => {
  if (num1 > num2 && typeof num1 === 'number' && typeof num2 === 'number') {
    return `${num1} is greater than ${num2}`;
  }
  if (num1 < num2 && typeof num1 === 'number' && typeof num2 === 'number') {
    return `${num1} is less than ${num2}`;
  }
  if (num1 == num2 && typeof num2 === 'string') {
    return `${num1} is equal to ${num2} (due to type coercion)`;
  }
  if (num1 === num2) {
    return `${num1} is equal to ${num2} (due to strict equality)`;
  }
  if (num1 >= num2 && typeof num1 === 'number' && typeof num2 === 'number') {
    return `${num1} is greater than or equal to ${num2}`;
  }
  if (num1 <= num2 && typeof num1 === 'number' && typeof num2 === 'number') {
    return `${num1} is less than or equal to ${num2}`;
  }
  if (num1 >= num2 && (typeof num1 === 'string' || typeof num2 === 'string')) {
    return `${num1} is greater than ${num2}, this is due to type coercion`;
  }
  if (num1 <= num2 && (typeof num1 === 'string' || typeof num2 === 'string')) {
    return `${num1} is less than ${num2}, this is due to type coercion`;
  }
};

const comparisonResult = compareTwoNumbers('99', 11);
console.log(comparisonResult);

//LOGICAL OPERATORS

// write a program that uses &&, || to combine two conditions, also use negate operator (!) and log the result

const isAbleToDrive = (age, hasDrivingLicense, hasSoMuchMoney) => {
  if (age <= 0) {
    return `Please enter a valid age`;
  }
  if (age < 18 && !hasSoMuchMoney) {
    return !hasDrivingLicense;
  }

  if (age >= 18 && hasDrivingLicense) {
    return `You can drive`;
  }
  if (age >= 18 && !hasDrivingLicense && !hasSoMuchMoney) {
    return `You can not drive! Give me some money first :-)`;
  }
  if (age < 18 || hasSoMuchMoney) {
    return `You can also drive! No problem sir :)`;
  }
};

const isAbleToDriveResult = isAbleToDrive(21, true, false);
console.log(isAbleToDriveResult);

// TERNARY OPERATOR

// write a program that uses ternary operator to check if a number is positive or negative and log the result

const isPositiveNumber = (num) => {
  let result;
  if (num === 0) {
    return `Please enter a number greater than 0`;
  }

  num > 0 ? (result = `${num} is positive`) : (result = `${num} is negative`);
  return result;
};

const isPositiveNumberResult = isPositiveNumber(-34);
console.log(isPositiveNumberResult);
