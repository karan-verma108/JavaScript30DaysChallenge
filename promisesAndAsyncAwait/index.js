/* 1) create a promise that resolves with a message after a 2-second timeout and log the message

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 2000);
});

promise1
  .then(() => {
    console.log('promise is resolved after two seconds');
  })
  .catch(() => {
    console.log('err');
  }); */

/* 2) create a promise that rejects with an error message after a 2-second timeout and handle the error with .catch

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 2000);
});

promise2
  .then(() => {
    console.log('Promise is resolved after 2 seconds');
  })
  .catch(() => {
    console.log('Error : Promise is rejected');
  });*/

// /   3) create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: 'roy', age: 99, profession: 'developer' });
  }, 3000);
});

promise3
  .then((data) => {
    console.log('data recieved is', data);
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 2000, data.profession);
    }).then((furtherData) => console.log('further Data is ', furtherData));
  })
  .catch(() => {
    console.log('Server Side Error');
  });

/*   4) write an async function that waits for a promise to resolve and then logs the resolved value

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ message: 'Promise is resolved' });
  }, 2000);
});

const handlePromise4 = async () => {
  const response = await promise4;
  console.log('The response recieved is ', response.message);
};

handlePromise4(); */

/* 5) write an async function that handles a rejected promised using try catch and logs the error message

const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = false;
    if (error) {
      resolve({ successMessage: 'Promise is resolved' });
    } else {
      reject({ failureMessage: 'Promise is rejected' });
    }
  }, 2000);
});

const handlePromise5 = async () => {
  try {
    const response = await promise5;
    console.log('The response is : ', response.successMessage);
  } catch (error) {
    console.log('The error is ,', error.failureMessage);
  }
};

handlePromise5(); */

/* 6) use the fetch api to get data from a public api and log the response data to the console using promises

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => console.log('data received from api is : ', data))
  .catch((err) => console.log('err', err)); */

/* 7) use the fetch api to get data from a public api and log the response data to the console using async/await

const getUsersData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    data.map((currentData) => console.log(`Name is ${currentData.name}`));
  } catch (error) {
    console.log(`Error : ${error}`);
  }
};

getUsersData(); */

/* 8) use Promise.all to wait for multiple promises to resolve and then log all their values

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'roy');
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(resolve, 900, 'mona');
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(resolve, 1200, 'shona');
});

Promise.all([promiseOne, promiseTwo, promiseThree])
  .then((value) => {
    console.log('value is ', value); //we can access a particular value like at 0th index -> value[0]
  })
  .catch((err) => {
    console.log('err ', err);
  }); */

// 9) use Promise.race to log the value of the first promise that resolves among multiple promises

let firstPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'hurray! im first');
});

let secondPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 950, 'well not really im first');
});

let thirdPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 120, 'you guys really think you can beat me??');
});

let fouthPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 8100, 'wait for me yr');
});

Promise.all([firstPromise, secondPromise, thirdPromise, fouthPromise])
  .then((value) => {
    console.log('value', value);
  })
  .catch((err) => {
    console.log('error : ', err);
  });

//playing with feature 5
firstPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 600, 'hurray im more faster now');
});

secondPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'well im not that fast anymore');
});

thirdPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'man oh man i got so late');
});

fouthPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, 'still no relief for me');
});

Promise.race([firstPromise, secondPromise, thirdPromise, fouthPromise])
  .then((value) => console.log(value))
  .catch((err) => console.log(err));
