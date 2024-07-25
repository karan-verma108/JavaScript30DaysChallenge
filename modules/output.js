import $im0Rw$lodash from "lodash";
import $im0Rw$axios from "axios";



const $8db018182a15e6c6$export$c7e82bda96b6341f = (num1, num2)=>{
    return num1 + num2;
};


const $87aa100405fd18ce$export$350d5dbd4d868a54 = {
    name: "roy",
    age: 70,
    profession: "developer",
    isHappy (money, depression) {
        if (money > depression) return `${this.name} is happy today`;
        else return `${this.name} is not happy`;
    }
};


const $a181cbd1a81cc19e$export$2060d2db72cce88f = (num1, num2)=>{
    if (num1 === 0 || num2 === 0) return `Please enter value greater than 0`;
    else return `The multiplication of ${num1} and ${num2} is ${num1 * num2}`;
};
const $a181cbd1a81cc19e$export$20c2ea443448dde5 = (year)=>{
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) return `${year} is a leap year`;
            else return `${year} is not a leap year`;
        } else return `${year} is a leap year`;
    } else return `${year} is not a leap year`;
};
const $a181cbd1a81cc19e$export$54b6b7c8f6621cea = (receivedStr)=>{
    let reversedStrArr = [];
    for(let i = receivedStr.length - 1; i >= 0; i--)reversedStrArr.push(receivedStr[i]);
    const reversedStr = reversedStrArr.join("");
    if (receivedStr === reversedStr) return `It is a palindrom, received string is ${receivedStr} and reversed string is ${reversedStr}`;
    else return `It is not a palindrom, received string is ${receivedStr} and reversed string is ${reversedStr}`;
};


const $9b4cac02dc27f9ab$var$fetchAnyApi = async (apiUrl)=>{
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        return "Error fetching the api";
    }
};
var $9b4cac02dc27f9ab$export$2e2bcd8739ae039 = $9b4cac02dc27f9ab$var$fetchAnyApi;


const $b421f3bfd09bcc7f$export$31803937850fb2da = 2024;
const $b421f3bfd09bcc7f$export$aca83c97068f7188 = "good mood";
const $b421f3bfd09bcc7f$export$4e71efb5d0d7ef95 = (doesKnowCode)=>{
    if (doesKnowCode) return "You can create your github profile";
    else return "You cannot create github profile";
};
const $b421f3bfd09bcc7f$export$a8b500dc61192962 = ()=>{
    const date = new Date();
    const time = date.toLocaleTimeString();
    return time;
};


/* 1) create a module that exports a function to add two numbers. Import and use this module in another script 
const sumOfTwoNumbers = addition(5, 6);
console.log(`sumOfTwoNumbers is ${sumOfTwoNumbers}`);*/ /* 2) create a module that exports an object representing a person with properties and methods. Import and use this module in another script

console.log(`The retrieved module is ${personObj}`);
console.log(`The name is ${personObj.name}`);
console.log(`The age is ${personObj.age}`);
console.log(`Let's check if he is happy? ${personObj.isHappy(1000, 30)}`); */ /* 3) create a module that exports multiple functions using named exports. Import and use these functions in another script

// let's try these methods
// first, multiply method

const multiplyResult = multiply(3, 9);
console.log(`multiplyResult is ${multiplyResult}`);

// second, findLeapYear function

const findLeapYearResult = findLeapYear(1700);
console.log(`findLeapYear result is ${findLeapYearResult}`);

// third, isPalindrome function

const isPalindromeResult = isPalindrome('meau');
console.log(`isPalindrome result is ${isPalindromeResult}`); */ /* 4) create a module that exports a single function using default export. Import and use this function in another script

// let's try this fetch api method that is imported from another module

fetchAnyApi('https://jsonplaceholder.typicode.com/users')
  .then((data) => {
    console.log('data ', data);
  })
  .catch((err) => {
    console.log(err);
  }); */ //   5) create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties
const $747425b437e121da$var$key1 = (0, $b421f3bfd09bcc7f$export$31803937850fb2da);
const $747425b437e121da$var$key2 = (0, $b421f3bfd09bcc7f$export$aca83c97068f7188);
const $747425b437e121da$var$key3 = (0, $b421f3bfd09bcc7f$export$4e71efb5d0d7ef95);
const $747425b437e121da$var$key4 = (0, $b421f3bfd09bcc7f$export$a8b500dc61192962);
const $747425b437e121da$var$newObj = {
    key1: $747425b437e121da$var$key1,
    key2: $747425b437e121da$var$key2,
    key3: $747425b437e121da$var$key3,
    key4: $747425b437e121da$var$key4
};
// console.log('newobj', newObj.key4());
// 6) install a third party module lodash using npm. Import and use a function from this module in a script
// using a function isArray from lodash
const $747425b437e121da$var$notArray = "123";
const $747425b437e121da$var$result = (0, $im0Rw$lodash).isArray($747425b437e121da$var$notArray);
// console.log(`is notArray an array ? ${result}`);
// 7) install a third party module axios using npm. Import and use this module to make a network request in a script
const $747425b437e121da$var$letsFetchApiAgain = async ()=>{
    try {
        const data = await (0, $im0Rw$axios).get("https://jsonplaceholder.typicode.com/users");
        console.log("data is", data);
    } catch (error) {
        console.log(error);
    }
};
$747425b437e121da$var$letsFetchApiAgain(); // 8) use a module bundler like webpack or parcel to bundle multiple javascript files into a single file. Write a script to demonstate the bundling process


//# sourceMappingURL=output.js.map
