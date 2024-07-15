// 1) write a program to check if a number is positive, negative or zero

const checkNumber = (num) => {
  let result;
  if (num === 0) {
    result = `num is zero`;
  } else if (num < 0) {
    result = `${num} is negative`;
  } else if (num > 0) {
    result = `${num} is positive`;
  } else {
    result = 'Please enter a valid number';
  }
  return result;
};

const checkNumberResult = checkNumber(9);
console.log(checkNumberResult);

// 2) write a program to check if a person is eligible to vote (age >=18)

const checkVotingAge = (age) => {
  let result;
  if (age <= 0) {
    result = `First, you must get born!`;
  } else if (age > 0 && age < 15) {
    result = `You still need to wait dude`;
  } else if (age > 15 && age < 18) {
    result = `Please wait for few more years son!`;
  } else {
    result = `Congrats! you're ${age} years old and can vote, but vote who I told you to, ok 😄`;
  }
  return result;
};

const checkVotingAgeResult = checkVotingAge(19);
console.log(checkVotingAgeResult);

// 3) write a program to find the lasgest of three numbers using nested if else

const largestOfThree = (num1, num2, num3) => {
  let result;
  if (num1 > num2) {
    if (num1 > num3) {
      result = `${num1} is largest out of ${num2}, ${num3}`;
    }
  } else if (num2 > num3) {
    result = `${num2} is largest out of ${num1}, ${num3}`;
  } else {
    result = `${num3} is largest out of ${num1}, ${num2}`;
  }
  return result;
};

const largestOfThreeResult = largestOfThree(32, 99, 5);
console.log(largestOfThreeResult);

// 4) write a program that uses a switch case to determine the day of the week based on a number (1-7)

const dayOfWeek = (dayNumber) => {
  let result;
  switch (dayNumber) {
    case 1:
      result = `You chose ${dayNumber} and it's Sunday`;
      break;
    case 2:
      result = `You chose ${dayNumber} and it's Monday`;
      break;
    case 3:
      result = `You chose ${dayNumber} and it's Tuesday`;
      break;
    case 4:
      result = `You chose ${dayNumber} and it's Wednesday`;
      break;
    case 5:
      result = `You chose ${dayNumber} and it's Thursday`;
      break;
    case 6:
      result = `You chose ${dayNumber} and it's Friday`;
      break;
    case 7:
      result = `You chose ${dayNumber} and it's Saturday`;
      break;
    default:
      result = 'Please enter a number between 1-7 only';
  }
  return result;
};

const dayOfWeekResult = dayOfWeek(3);
console.log(dayOfWeekResult);

// 5) write a program that uses a switch case to assign a grade (A,B,C,D,F) based on a score

const assignGrades = (scorePercentage) => {
  let result;

  if (scorePercentage <= 0) {
    result = `What are you doing here? Go study hard!`;
  }

  switch (true) {
    case scorePercentage >= 90 && scorePercentage < 100:
      result = `Congrats! You don't need to study, you scored A`;
      break;
    case scorePercentage >= 80 && scorePercentage < 90:
      result = `Nice work, you scored B`;
      break;
    case scorePercentage >= 60 && scorePercentage < 80:
      result = `Not that bad, you scored C`;
      break;
    case scorePercentage >= 40 && scorePercentage < 60:
      result = `Do more hard work, you scored D!`;
      break;
    case scorePercentage > 10 && scorePercentage < 40:
      result = `Congrats! You FAILED! `;
      break;
    default:
      result = 'Please enter your scores correctly before I call your parents';
  }
  return result;
};

const assignGradesResult = assignGrades(79);
console.log(assignGradesResult);

// 6) write a program that uses a ternary operator to check if it's even or odd

const evenOdd = (num) => {
  let result;
  if (num <= 0) {
    result = 'Please enter a number greater than 0';
  } else {
    result = num % 2 === 0 ? true : false;
    if (result) {
      result = `num ${num} is even`;
    } else {
      result = `num ${num} is odd`;
    }
  }
  return result;
};

const evenOddResult = evenOdd(3);
console.log(evenOddResult);

// 7) write a program to check if an year is a leap year using multiple conditions (divisible by 4, but not by 100 unless also divisible by 400)

const isLeapYear = (year) => {
  let result;
  if (year <= 0) {
    result = 'At lease enter something relevant dude!';
  }
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        result = `${year} is a leap year`;
      } else {
        result = `${year} is not a leap year`;
      }
    } else {
      result = `${year} is a leap year`;
    }
  } else {
    result = `${year} is not a leap year`;
  }
  return result;
};

const isLeapYearResult = isLeapYear(2021);
console.log(isLeapYearResult);
