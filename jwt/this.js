const person = {
  firstName: "bhupender",
  lastName: "Rajak",
  fullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};
person.fullName();

const person1 = {
  firstName: "rahul",
  lastName: "singh",
  fullName: () => {
    console.log(this.firstName + " " + this.lastName);
  },
};
person1.fullName();
