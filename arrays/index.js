// 1) create an array of numbers from 1 to 5 and log the result

const numArr = [1, 2, 3];
console.log(numArr);

// 2) access the first and last elements of the array

console.log(`first element of the array [${numArr}] is ${numArr[0]}`);
console.log(
  `last element of the array [${numArr}] is ${numArr[numArr.length - 1]}`
);

// 3) use the push method to add a new number to the end of the array and log the updated array

let updatedArr = numArr.push(6); //returns the new length of the array
console.log('updatedArr', updatedArr); //prints the new length of the array
console.log(numArr); //prints the new updated array

// 4) use the pop method to remove the last element of the array and log the updated array

updatedArr = numArr.pop(); //returns the removed element
console.log('removed element', updatedArr);
console.log('original array after modification', numArr);

// 5) use the shift method to remove the first element from the array and log the updated array

updatedArr = numArr.shift(); //returns the first removed element at index 0 of the array
console.log('removed element from 0 index', updatedArr);
console.log('original array after modification', numArr);

// 6) use the unshift method to add a new number to the beginning of the array and log the updated array

updatedArr = numArr.unshift(9); //returns the new array length after a new element is added at the beginning
console.log('new array length', updatedArr);
console.log('original array after modification', numArr);

// 7) use the map method to create a new array where each number is doubled and log the new array

const doubledArr = numArr.map((newItem) => newItem ** 2);
console.log('doubled Array', doubledArr);

// 8) use the filter method to create a new array with only even numbers and log the new array

const onlyEvenArr = doubledArr.filter(
  (currentElement) => currentElement % 2 === 0
);

console.log('only Even Numbered Array', onlyEvenArr);

// 9) use the reduce method to calculate the sum of all the numbers in the array and log the result

const newArr = [2, 43, 5, 6];
const sumOfArr = newArr.reduce(
  (accumulator, currentElement) => accumulator + currentElement
);

console.log('sum of arr', sumOfArr);

// 10) use a for loop to iterate over the array and log each element to the console

const myArr = ['sigma', 'thapa', 'namaste', 'chai'];
for (let i = 0; i < myArr.length; i++) {
  console.log(myArr[i]);
}

// 11) use the forEach method to iterate over the array and log each element to the console

const newNameArr = myArr.forEach((currentElement) => currentElement);
console.log(newNameArr); //returns undefined as forEach returns undefined
console.log('array elements iterated through forEach', myArr); //to print the modified version of the array aka the original array

// 12) create a 2 dimensional array(matrix) and log the entire array to the console

const testArr1 = [1, 2, 3];
const testArr2 = [4, 5, 6];

const twoDimensionalArr = [testArr1, testArr2];
console.log(twoDimensionalArr);

// 13) access and log a specific element from the multidimensional array

//accessing the number 2
console.log(twoDimensionalArr[0][1]);
//accessing the number 5
console.log(twoDimensionalArr[1][1]);

