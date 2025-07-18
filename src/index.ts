interface Animal {
  name: string;
  age: number;
}
interface Human {
  name: string;
  age: number;
  address: string;
}

type AnimalHuman = Animal | Human;
const temp: AnimalHuman = {
  address: "대구",
  age: 20,
  name: "홍길동",
};
