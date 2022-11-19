// outer world can still access the variable
// class Student {
//   constructor(id, name, marks) {
//     this.id = id;
//     this.name = name;
//     this.marks = marks;
//   }
//   setName(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
// }
// let s = new Student(2, "bhupi", 34);
// s.name = 34;
// console.log(s.getName());

class Student {
  constructor(id, name, marks) {
    let _id = id;
    let _name = name;
    let _marks = marks;
    this.getName = () => _name;
    this.getId = () => _id;
    this.getMarks = () => _marks;
    this.setMarks = (marks) => (_marks = marks);
  }
  get name() {
    return this.getName;
  }
}
let s = new Student(2, "bhupi", 34);
console.log(s.name());
