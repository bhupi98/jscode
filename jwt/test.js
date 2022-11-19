// class in js
// The this keyword in Javascript is used to refer to the current object in a method or constructor. It is used to stamp out the confusion between class attributes and parameters that are passed to the constructor with the same name.

//class with the same name
// class Student {
//   constructor(firstName, lastName, age, rollNo) {
//     (this.firstName = firstName),
//       (this.lastName = lastName),
//       (this.age = age),
//       (this.rollNo = rollNo);
//   }
// }
// let s1 = new Student("bhupi", "cool", 34, 34434);
// console.log(s1);

// class with the different name
// class Student {
//   constructor(firstNameInput, lastNameInput, ageInput, rollNoInput) {
//     (this.firstName = firstNameInput),
//       (this.lastName = lastNameInput),
//       (this.age = ageInput),
//       (this.rollNo = rollNoInput);
//   }
//   name() {
//     return `firstName is ${this.firstName} and lastName is ${this.lastName}`;
//   }
// }
// let s1 = new Student("bhupi", "cool", 34, 3434);

// class Coder extends Student {
//   constructor(firstName, lastName, age, rollNo, language) {
//     super(firstName, lastName, age, rollNo);
//     this.language = language;
//   }
//   displayLang() {
//     return `${this.firstName} codes in ${this.language}`;
//   }
// }

// let c = new Coder("bhupender", "", "", "", "javaScript");
// console.log(c);
// c.displayLang();
// console.log(c.displayLang());

// class Person {
//   // private field Name
//   #age = 0;
//   // public field Name
//   name = "";
//   constructor(name) {
//     this.name = name;
//   }
//   birthday() {
//     this.#age++;
//   }
//   displayAge() {
//     return `Age is ${this.#age}`;
//   }
// }
// // let p = new Person("Rahul");
// // console.log(p.name);
// // console.log(p.birthday());
// // console.log(p.displayAge());
// // p.#age = 10;
// // console.log(p.displayAge());

// getter and setter
// class Programming {
//   #name;
//   #age;
//   getName() {
//     return this.#name;
//   }
//   getAge() {
//     return this.#age;
//   }
//   setName(x) {
//     this.#name = x;
//   }
//   setAge(x) {
//     this.#age = x;
//   }
// }
// let p = new Programming();
// console.log(p.getAge() + " " + p.getName());
// p.setAge(334);
// p.setName("bhupender");
// console.log(p.getAge());
// console.log(p.getName());

// making bouond methods with class

// class Person {
//   constructor(name) {
//     this.name = this.name.bind(this);
//   }
//   displayName() {
//     console.log(this.name);
//     return `name is ${this.name}`;
//   }
// }
// let p = new Person("Bhupender");
// // console.log(p.displayName());
// setTimeout(p.displayName, 1000);

// There are two ways to fix this issue:

// // by passing wrapper function
// setTimeout(() => p.displayName(), 1000);

//
const User = function (name, age, rollno) {
  (this.name = name), (this.age = age), (this.rollno = rollno);
  this.consoleThis = function () {
    console.log(this.name + " " + this.age);
  };
};
let user1 = new User("Bhupender", 35, 343);
let user2 = new User("Rahul", 34, 34);
// console.log(user1);
// console.log(user2);
user1.consoleThis();
user2.consoleThis();
