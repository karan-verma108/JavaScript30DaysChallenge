// 1) write a program to print numbers from 1 to 10 using a loop

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2) write a program to print the multiplicaition table of 5 using a loop

for (let i = 1; i <= 10; i++) {
  console.log(`${5} * ${i} = ${5 * i}`);
}

// 3) write a program to calculate the sum of numbers from 1 to 10 using a while loop

let i = 1;
let sum = 0;
while (i <= 10) {
  sum += i; //sum = sum +i;
  i++;
}
console.log(sum);

// 4) write a program to print numbers from 10 to 1 using a loop

let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}

// 5) write a program to print numbers from 1 to 5 using a do while

let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);

// 6) write a program to calculate the factorial of a number using do while

const findFactorial = (num) => {
  let factorial = 1;
  do {
    factorial *= num; //factorial = factorial*num;
    num--;
  } while (num >= 1);
  return factorial;
};

const findFactorialResult = findFactorial(5);
console.log(findFactorialResult);

// 7) write a program to print a pattern using nested loops

for (let i = 0; i < 5; i++) {
  let pattern = '';
  for (let j = 0; j <= i; j++) {
    pattern += '*';
  }
  console.log(pattern);
}

// 8) write a program to print numbers from 1 to 10 but skip the number 5 using continue statement

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// 9) write a program to print numbers from 1 to 10, but stop the loop when number is 7 using break statement

for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}
