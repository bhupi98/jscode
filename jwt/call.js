let person = {
  firstName: "Bhupender",
  lastName: "Rajak",
};

let fullName = function (city, country) {
  console.log(
    `My fullName is ${this.firstName}${this.lastName} and i live in ${city} and the country Name is ${country}`
  );
};
let data = fullName.call(person, "Delhi", "India");

let data1 = fullName.apply(person, ["Pune", "India"]);

let data2 = fullName.bind(person, "Up", "India");
data2();

function getNumbers(a) {
  return function (a) {
    console.log("will return number that you will pass", a);
  };
}
getNumbers(34343)(5555);

let calculater = {
  add: function (a, b) {
    return a + b;
  },
};
console.log(calculater.add(3, 5));
