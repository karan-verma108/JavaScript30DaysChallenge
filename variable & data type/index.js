//declare a variable using var, assign it a number and log the result

var myNum = 98;
console.log(myNum);

//declare a variable using let, assign it a string and log the result

let myStr = 'hello javascript';
console.log(myStr);

//declare a variable using const, assign it a boolean value and log the result

const isJavaScriptChallengeAccepted = true;
console.log(isJavaScriptChallengeAccepted);

const myBioDataObj = {
  name: 'roy',
  age: 30,
  profession: 'Software Developer',
};

const numArr = [1, 2, 3, 4, 5];

//let's check type of all these declared variables

console.log(`value of myNum is ${myNum} & typeof myNum is ${typeof myNum}`);
console.log(`value of myStr is ${myStr} & typeof myStr is ${typeof myStr}`);
console.log(
  `value of isJavaScriptChallengeAccepted is ${isJavaScriptChallengeAccepted} & typeof isJavaScriptChallengeAccepted is ${typeof isJavaScriptChallengeAccepted}`
);
console.log(
  `value of myBioDataObj is ${myBioDataObj} & typeof myBioDataObj is ${typeof myBioDataObj}`
);
console.log(`value of numArr is ${numArr} & typeof numArr is ${typeof numArr}`);

//declare a variable using let, assign it an initial value, reassign a new value, and log both values to console

let myFavDish = 'rajma';
console.log(myFavDish);
myFavDish = 'aalu ka parathe';
console.log(myFavDish);

//try reassiging a new value to const and observe the eror

const myBirthdate = 7;
// myBirthdate = 9; throws a type error

const resultOfInterpolation = myBioDataObj.toString();
console.log(resultOfInterpolation); //[object object]
