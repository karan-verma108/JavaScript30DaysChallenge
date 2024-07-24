// 1) write a function that intentionally throws an error and use try-catch block to handle the error and log an appropriate message

const throwErrorFun = () => {
  throw new Error('Error : 500');
};

const handleThrowError = async () => {
  try {
    const result = throwErrorFun();
    if (result) {
      console.log('No error, continue browsing');
    }
  } catch (error) {
    console.log('We received an error, please try again later');
  }
};

// handleThrowError();

// 2) create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch to handle this error

const divideNumbers = (numerator, denominator) => {
  if (denominator === 0) {
    throw new Error('Error : Denominator is a zero value');
  } else {
    return `The division result is ${(numerator / denominator).toFixed(2)}`;
  }
};

const handleDivideNumbers = () => {
  try {
    const result = divideNumbers(3, 9);
    if (result) {
      console.log('Result is ', result);
    }
  } catch (error) {
    console.log('Err : Denominator is a zero value');
  }
};

// handleDivideNumbers();

// 3) write a script that includes a try catch block and a finally block. Log messages in the try catch and finally block to observe the execution flow

const giveValue = () => {
  throw new Error('idk');
};

const handleUsingAll = () => {
  try {
    const result = giveValue();
    if (result) {
      console.log('we receive an input sir');
    }
  } catch (error) {
    console.log('well not really, we have recieved an error');
  } finally {
    console.log(
      'i dont know what i received but i will always receive something '
    );
  }
};

// handleUsingAll();

// 4) create a custom error class that extends the built in error class. Throw an instance of this custom error in a function and handle it using try catch

class CustomError extends Error {
  constructor(message, extraInfo) {
    super(message);
    this.name = 'Custom Error';
    this.extraInfo = extraInfo;
  }
}

const passNumber = (value) => {
  if (typeof value !== 'number') {
    throw new CustomError(
      'Cannot proceed further, Please enter a number only',
      { WrongValueTypePassed: true }
    );
  }
  return `You entered ${value}`;
};

try {
  console.log(passNumber(4));
} catch (error) {
  if (error instanceof CustomError) {
    console.error(`Custom Error Caught : ${error.message}`);
    console.error(`Extra info : ${error.extraInfo}`);
  } else {
    console.log('An unknown error occurred');
  }
}

// 5) write a function that validates user input (checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try catch

class NameIsEmpty extends Error {
  constructor(message, extraInfo) {
    super(message);
    this.name = 'NameIsEmpty';
    this.extraInfo = extraInfo;
  }
}

const getNameFromUser = (name) => {
  if (name === '' || name.length === 0) {
    throw new NameIsEmpty('Cannot proceed further because name is empty', {
      NameIsPending: true,
    });
  }
  return `Entered name is ${name}`;
};

try {
  console.log(getNameFromUser('roy'));
} catch (error) {
  if (error instanceof NameIsEmpty) {
    console.error(`Error Message : ${error.message}`);
  } else {
    console.log('An unknown error occurred');
  }
}

// 6) create a promise that randomly resolved or rejects. Use .catch() to handle the rejection and log an appropriate message to the console

const randomPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const countNumber = Math.floor(Math.random() * 10);
    if (countNumber % 2 === 0) {
      resolve({ countNumber: countNumber });
    } else {
      reject({ countNumber: countNumber });
    }
  }, 1000);
});

randomPromise
  .then((value) => {
    console.log('Promise was resolved', value.countNumber);
  })
  .catch((error) => {
    console.log('Promise was rejected', error.countNumber);
  });

//   7) use try catch within an async function to handle errors from a promise that randomly resolves or rejects, log the message

const checkRandomPromise = async () => {
  try {
    const result = await randomPromise;
    if (result) {
      console.log('promise resolved using async await', result.countNumber);
    }
  } catch (error) {
    console.log('Promise reject using async await', error.countNumber);
  }
};

checkRandomPromise();

// 8) use the fetch api to request data from an invalid url and handle the error using .catch and log an appropriate error message to the console

fetch('https://jsonplaceholer.typicode.com/users')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log('Promise was resolved here is your data sir', data);
  })
  .catch((err) => {
    console.log('Some error occurred ');
  });

// 9) use the fetch api to request data from an invalid url within an async function and handle the error using try catch and log an appropriate error message to the console

// class CouldNotFetchAPI extends Error {
//   constructor(message, extraInfo) {
//     super(message);
//     this.name = 'CouldNotFetchAPI';
//     this.extraInfo = extraInfo;
//   }
// }

const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholer.typicode.com/users');
    const data = await response.json();
    console.log('wow the data was fetched succesfully ', data);
  } catch (error) {
    console.log('oh oh! we received an error dude');
  }
};
fetchData();
