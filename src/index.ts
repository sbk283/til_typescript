interface Dog {
  name: string;
  age: number;
}
interface Cat {
  name: string;
  age: number;
}

type DogCat = Dog | Cat;

function isDog(a: DogCat): a is Dog {
  return (a as Dog).age !== undefined;
}

const pp: DogCat = {
  name: "Buddy",
  age: 5,
};
