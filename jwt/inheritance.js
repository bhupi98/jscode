class Man {
  constructor(firstName, lastName, age, gender) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.age = age),
      (this.gender = gender);
  }

  getManDetails() {
    console.log(`My fullName is ${this.firstName} ${this.lastName}`);
  }
}
class Woman {
  constructor(firstName, lastName, age, gender) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.age = age),
      (this.gender = gender);
  }
  getWomanDetails() {
    console.log(`I'm ${this.firstName} ${this.lastName}`);
  }
}
class Human extends Man {
  constructor(firstName, lastName, age, gender, language) {
    super(firstName, lastName, age, gender);
    this.language = language;
  }
  getHumans() {
    console.log(
      `I'm human and My name is ${this.firstName} ${this.lastName} and i speak ${this.language} lanugage`
    );
  }
}

let h = new Human("Bhupender", "Rajak", 34, "male", "English");
console.log(h);
console.log(h.getHumans());
