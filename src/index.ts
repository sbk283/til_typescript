interface Pet {
  legs: number;
  bark(): void;
}
interface Animal {
  name: string;
  age: number;
}
class Cat implements Pet, Animal {
  name: string;
  age: number;
  legs: number;
  constructor(name: string, age: number, legs: number) {
    this.name = name;
    this.age = age;
    this.legs = legs;
  }
  bark(): void {}
}

type AnimalPet = Pet & Animal;
const d: AnimalPet = {
  name: "댕댕이",
  age: 2,
  legs: 4,
  bark() {
    console.log("멍멍");
  },
};

class Cat2 implements AnimalPet {
  name: string;
  age: number;
  legs: number;
  constructor(name: string, age: number, legs: number) {
    this.name = name;
    this.age = age;
    this.legs = legs;
  }
  bark(): void {}
}
