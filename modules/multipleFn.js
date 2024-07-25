const multiply = (num1, num2) => {
  if (num1 === 0 || num2 === 0) {
    return `Please enter value greater than 0`;
  } else {
    return `The multiplication of ${num1} and ${num2} is ${num1 * num2}`;
  }
};

const findLeapYear = (year) => {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return `${year} is a leap year`;
      } else {
        return `${year} is not a leap year`;
      }
    } else {
      return `${year} is a leap year`;
    }
  } else {
    return `${year} is not a leap year`;
  }
};

const isPalindrome = (receivedStr) => {
  let reversedStrArr = [];
  for (let i = receivedStr.length - 1; i >= 0; i--) {
    reversedStrArr.push(receivedStr[i]);
  }
  const reversedStr = reversedStrArr.join('');
  if (receivedStr === reversedStr) {
    return `It is a palindrom, received string is ${receivedStr} and reversed string is ${reversedStr}`;
  } else {
    return `It is not a palindrom, received string is ${receivedStr} and reversed string is ${reversedStr}`;
  }
};

export { multiply, findLeapYear, isPalindrome };
