// problem with it anyone can access variable from outside

// let student = {
//   id: 12,
//   name: "bhupender",
//   marks: 87,
//   setMarks: function (newMarks) {
//     if (isNaN(newMarks)) {
//       throw new Error("Its is string please give number like 80,34");
//     }
//     this.marks = newMarks;
//   },
// };

//  Using this, variables id, name, and marks are not accessible from the outer scope. But this also means that we will not be able to access the inner getter and setter methods.

// function student() {
//   let id = 12;
//   let name = "bhupender";
//   let marks = 87;
//   function setMarks(newMarks) {
//     if (isNaN(newMarks)) {
//       throw new Error("need number got string");
//     }
//     marks = newMarks;
//   }
// }

let student = (function () {
  let id = 23;
  let name = "bhupender";
  let marks = 34;
  let obj = {
    setMarks: function (newMarks) {
      if (isNaN(newMarks)) {
        throw new Error("string is not acceptable");
      }
      marks = newMarks;
    },
    getMarks() {
      return marks;
    },
    getId() {
      return id;
    },
    getName() {
      return name;
    },
  };
  return obj;
})();
console.log("objec", student);
console.log(student.setMarks("nity"));
console.log(student.getId());
console.log(student.getMarks());
console.log(student.getName());
