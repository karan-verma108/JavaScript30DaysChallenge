/* 1) write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result

const fun1 = () => {
  const num = 3;

  function fun2() {
    console.log(
      `The sum after adding variable from outer function is ${num + 3}`
    );
  }

  return fun2; //i was returning fun2() which is a mistake as it rather calls fun2 here itself
};

const innerFun = fun1();
console.log('inner fun', innerFun);
innerFun();*/

/* 2) Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter

const parentFun = () => {
  let privateCounter = 1;

  const incrementCount = () => {
    privateCounter += 1;
    return privateCounter;
  };

  return incrementCount;
};

const innerFun = parentFun();
console.log(`incremented count is ${innerFun()}`); */

/* 3) write a function that generates unique IDs. Use a closure to keep track of the last generated ID and icrement it with each call.

const generateUniqueId = () => {
  let uniqueValue = Math.floor(Math.random() * 10);
  const innerFun = () => {
    console.log('unique value before getting incremented', uniqueValue);
    uniqueValue++;
    return uniqueValue;
  };

  return innerFun;
};

const result = generateUniqueId();
console.log(result()); */

/* 4) create a closure that captures a user's name and returns a function that greets the user by name

const papaFunction = (username) => {
  const bacchaFunction = () => {
    return function greet() {
      return `Welcome to the team ${username}`;
    };
  };
  return bacchaFunction;
};

const result = papaFunction('johny');
const result2 = result();
console.log(result2()); */

/* 5) write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index

const funcsThroughLoop = () => {
  const arrOfFuncs = [];
  for (let i = 0; i < 4; i++) {
    arrOfFuncs.push(() => {
      console.log('the value of index is', i);
    });
  }
  return arrOfFuncs;
};

const funsArray = funcsThroughLoop();
funsArray.forEach((fun) => fun());*/

/* 7) Write a function that memorizes the result of another function. Use a closure to store the results of previous computations

const memorize = (fn) => {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;

    return result;
  };
};

const canDrive = (age) => {
  if (age >= 18) {
    return `You can drive because your age is ${age}`;
  } else {
    return `You cannot drive because your age is ${age}`;
  }
};

const memorizedCanDrive = memorize(canDrive);

console.log(memorizedCanDrive(45)); // "You can drive because your age is 45"
console.log(memorizedCanDrive(15)); // "You cannot drive because your age is 15"
console.log(memorizedCanDrive(45)); // "You can drive because your age is 45" (returns cached result) */

// 8) create a memorized version of a function that calculates the factorial of a number

const memorize = (fn) => {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;

    return result;
  };
};

const factorial = (n) => {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
};

const memorizedFactorial = memorize(factorial);

console.log(memorizedFactorial(5)); // 120
console.log(memorizedFactorial(3)); // 6
console.log(memorizedFactorial(5)); // 120 (returns cached result)
