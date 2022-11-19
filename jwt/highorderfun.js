// returning a function
function one(name) {
  return function (age) {
    console.log(`My name is ${name} and age is ${age}`);
  };
}
let result = one("bhupender")(34);

// passing fun as argument
let ageN = (age) => {
  return age;
};
function two(ageN) {
  console.log("Age:", ageN);
}
two(34);
