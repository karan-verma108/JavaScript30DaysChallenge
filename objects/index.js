// 1) create an object representing a book with properties like title, author and year and log the object to console

// const bookObj = {
//   title: 'How to earn 1 crore in 1 second (MLM)',
//   author: 'Kya pta kon',
//   year: 2024,
// };

// console.log(bookObj);

// 2) access and log the title and athor properties of the book Object

// console.log(bookObj.title);
// console.log(bookObj.author);

// 3) add a method to the book object that returns a string with the book's title and author, log the result of calling this method

// const bookObj = {
//   title: 'How to earn 1 crore in 1 second (MLM)',
//   author: 'Kya pta kon',
//   year: 2024,
//   bookFn: () => {
//     return `The name of the book is ${bookObj.title} and author is ${bookObj.author}`;  //this keyword doesn't work here because it's an arrow function
//   },
// };

// console.log(bookObj.bookFn());

//let's try one with a regular function (where this keyword works very well)

// const bookObj = {
//   title: 'How to earn 1 crore in 1 second (MLM)',
//   author: 'Kya pta kon',
//   year: 2024,
//   bookFn() {
//     return `The name of the book is ${this.title} and author is ${this.author}`; //this keyword doesn't work here because it's an arrow function
//   },
// };

// console.log(bookObj.bookFn());

// 4) add a method to the book object that takes a parameter(year) and updates the book's year property

const bookObj = {
  title: 'How to earn 1 crore in 1 second (MLM)',
  author: 'Kya pta kon',
  year: 2024,
  bookFn() {
    return `The name of the book is ${this.title} and author is ${this.author}`; //this keyword doesn't work here because it's an arrow function
  },
  updateYearFn(year) {
    return (this.year = year);
  },
};

bookObj.updateYearFn(2020);
// console.log(bookObj); //prints year as 2020 (updated year)

// 5) create a nested object representing a library with properties like name and books (an array of book object) log the library object

// const libraryObj = {
//   name: 'courage ki library',
//   books: [
//     {
//       id: 1,
//       bookName: 'courage ka milna',
//     },
//     {
//       id: 2,
//       bookName: 'eustas ka gussa hona',
//     },
//     {
//       id: 3,
//       bookName: 'myurial ka courage se lgav hona',
//     },
//   ],
// };

// console.log(libraryObj);

// 6) access and log the name of the library and the titles of all the books in the library

// console.log(`The name of the library is ${libraryObj.name}`);
// libraryObj.books.forEach((currentBook) =>
// //   console.log(`The title of the book is -> ${currentBook.bookName}`)
// );

// 7) add a method to the book object that uses the this keyword and returns a string with book's title and year and log the result of calling this method

//as I told you that we can't use this keyword inside arrow function so i will use it again inside a regular function

const myBookArrTwo = {
  title: 'kaun bnegi meri patni',
  author: 'sarkari karamchari',
  year: 1990,
  yearBata() {
    return `Title of book is ${this.title} and year is ${this.year}`;
  },
};

// console.log(myBookArrTwo.yearBata());

// 8) use a for..in loop to iterate over the properties of the object and log each property and its value

const libraryObj = {
  name: 'courage ki library',
  books: [
    {
      id: 1,
      bookName: 'courage ka milna',
    },
    {
      id: 2,
      bookName: 'eustas ka gussa hona',
    },
    {
      id: 3,
      bookName: 'myurial ka courage se lgav hona',
    },
  ],
};

// for (let properties in libraryObj) {
//   console.log(libraryObj[properties]); //if used with string template, it gives [object object] due to interplation concept (string representation of an object)
// }

// 9) use Object.keys() and Object.values() methods to log all the keys and values of the book Object

console.log(`The keys of this object are ${Object.keys(libraryObj)}`);
console.log(`The values of this object are ${Object.values(libraryObj)}`); //gives [object object] due to string interpolation of an object
console.log(Object.values(libraryObj)); //gives the expected outcome
