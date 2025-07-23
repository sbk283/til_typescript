class Animal {
  // 메서드
  dance() {
    console.log("나는 춤을 못춰");
  }
}
class Cat extends Animal {
  dance(): void {
    console.log("나는 춤을 적극적으로 출거야");
  }
}
class Dog extends Animal {}
const c = new Cat();
c.dance();

const d = new Dog();
d.dance();
