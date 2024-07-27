/* 1) define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeing message

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    return `Let's welcome ${this.name} who has turned ${this.age} this year`;
  }
}

const personClassInstance = new Person('roy', 37);
console.log(personClassInstance.greeting()); */

/* 2) add a method to the Person class that updates the age property and logs the updated age

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    return `Let's welcome ${this.name} who has turned ${this.age} this year`;
  }
  updateAge(newAge) {
    return `${this.name}'s previous age was ${this.age} and now his new age is ${newAge}`;
  }
}

 const result = new Person('roy', 4);
 console.log(result.updateAge(88)); */

/* 3) define a class Student that extends the Person class. Add a property studentId and a method to return the studentId. Create an instance of the Student class and log the studentId

class Student extends Person {
  constructor(studentId) {
    super(studentId);
    this.studentId = studentId;
  }
  showStudentId() {
    return `The studentId is ${this.studentId}`;
  }
}

const result = new Student(4);
console.log(result.showStudentId()); */

/* 4) override the greeting method in the Student class to include the studentId in the message. Log the overriden greeting message

class Student extends Person {
  constructor(studentId) {
    super(studentId);
    this.studentId = studentId;
  }
  showStudentId() {
    return `The studentId is ${this.studentId}`;
  }
  greeting() {
    return `Well, this time im not giving any greetings, my studentId is ${this.studentId}`;
  }
}

const result = new Student(4);
console.log(result.greeting()); */

/* 5) Add a static method to the Person class that returns a generic greeing message. Call this static method without creating an instance of the class and log the message

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    return `Let's welcome ${this.name} who has turned ${this.age} this year`;
  }
  updateAge(newAge) {
    return `${this.name}'s previous age was ${this.age} and now his new age is ${newAge}`;
  }
  static myFirstStaticMethod() {
    return `Hello guys, im his very first static method wow!`;
  }
} 

const obj = new Person(); //throws an error, obj.myFirstStaticMethod is not a function
console.log(Person.myFirstStaticMethod()); //no need to create an instance when we are using static methods */

/* 6) Add a static property to the Student class to keep track of the number of students created. Increment this perperty in the constructor and log the total number of students

class Student {
  static myStaticProperty = 0;
  constructor(studentId) {
    this.studentId = studentId;
    Student.myStaticProperty++;
  }
  showStudentId() {
    return `The studentId is ${this.studentId}`;
  }
  greeting() {
    return `Well, this time im not giving any greetings, my studentId is ${this.studentId}`;
  }
  showTotalStudents() {
    return `Total students are ${Student.myStaticProperty}`;
  }
}

const result = new Student();
const result1 = new Student();
const result3 = new Student();
// console.log(result3.showTotalStudents()); */

/* 7) add a getter method to the Person class to return the full name (assume a first name and last name property). Create an instance and log the full name using getter

class Person {
  constructor(age, firstName, lastName) {
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greeting() {
    return `Let's welcome ${this.name} who has turned ${this.age} this year`;
  }
  updateAge(newAge) {
    return `${this.name}'s previous age was ${this.age} and now his new age is ${newAge}`;
  }
  static myFirstStaticMethod() {
    return `Hello guys, im his very first static method wow!`;
  }
  get fullName() {
    return `The full name is ${this.firstName} ${this.lastName}`;
  }
}

const instanceOfPerson = new Person(43, 'roy', 'verma');
// console.log(instanceOfPerson.fullName); */

/* 8) add a setter method to the Person class to update the name properties (firstname and lastname). Update the name using the setter and log the updated full name

class Person {
  constructor(age, firstName, lastName) {
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${firstName} ${lastName}`;
  }
  updateAge(newAge) {
    return `previous age was ${this.age} and now his new age is ${newAge}`;
  }
  static myFirstStaticMethod() {
    return `Hello guys, im his very first static method wow!`;
  }
  get fullName() {
    return `The full name is ${this.firstName} ${this.lastName}`;
  }
  set fullName(value) {
    const [firstname, lastName] = value.split(' ');
    this.firstName = 'rohan';
    this.lastName = lastName.toUpperCase();
  }
}

const instanceOfPerson = new Person(43, 'roy', 'verma');
console.log(instanceOfPerson.fullName); */

/* 9) Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balane can only updated through these methods

class Account {
  #balance;

  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }

  get balance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount > 0) {
      console.log(`Balance was ${this.#balance} before depositing ${amount}`);
      this.#balance += amount;
      console.log(`Now it's ${this.#balance}`);
    } else {
      console.log(`Insufficient amount, please try again`);
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      console.log(`Balance was ${this.#balance} before withdrawing ${amount}`);
      this.#balance -= amount;
      console.log(`Now it's ${this.#balance}`);
    } else {
      console.log(`You request exceeds the total amount in your account`);
    }
  }
}

const accountObj = new Account((initialBalance = 43)); */

// 10) create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation

class Account {
  #balance;

  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }

  get balance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount > 0) {
      console.log(`Balance was ${this.#balance} before depositing ${amount}`);
      this.#balance += amount;
      console.log(`Now it's ${this.#balance}`);
    } else {
      console.log(`Insufficient amount, please try again`);
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      console.log(`Balance was ${this.#balance} before withdrawing ${amount}`);
      this.#balance -= amount;
      console.log(`Now it's ${this.#balance}`);
    } else {
      console.log(`You request exceeds the total amount in your account`);
    }
  }
}

const accountObj = new Account((initialBalance = 43));

accountObj.deposit(1200);
accountObj.withdraw(120);
