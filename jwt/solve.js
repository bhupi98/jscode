let array = [
  {
    name: "bhupi",
    age: 34,
    salary: 200340,
  },
  {
    name: "bhupender",
    age: 42,
    salary: 20020,
  },
  {
    name: "ashish",
    age: 32,
    salary: 20000,
  },
  {
    name: "rahul",
    age: 23,
    salary: 20003,
  },
];

let sortByAge = array.sort((a, b) => {
  return a - b;
});
console.log(sortByAge);
