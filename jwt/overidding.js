class Dog {
  constructor(name, age, gender) {
    (this.name = name), (this.age = age), (this.gender = gender);
  }
  speak() {
    console.log(`I'm Barking ....`);
  }
}

class Animal extends Dog {
  constructor(name, age, gender, color) {
    super(name, age, gender, color);
    this.color = color;
  }
  speak() {
    console.log(
      `My Name is ${this.name} and age is ${this.age} and gender is ${this.gender} and my color is ${this.color} and I do Barking`
    );
  }
}

let animal = new Animal("bhupi", 34, "male", "black");
let dog = new Dog();
console.log(dog.speak());
console.log(animal.speak());
