# type 과 interface 비교

## 1. 가장 큰 차이

- type : 객체. 기본형, 배열 등 모두 정의 가능
- interface : 객체만 대상으로 정의 가능

## 2. 객체 구조 정의 비교

```ts
interface IPerson {
  name: string;
  age: number;
}
type PersonType = {
  name: string;
  age: number;
};
```

## 3. 확장 방식의 차이

- interface : extends 키워드 사용
- type : & 연산자 사용

```ts
interface IAnimal {
  name: string;
}
interface IDog extends IAnimal {
  bark(): void;
}
type AnimalType = {
  name: string;
};
type DogType = AnimalType & {
  bark: () => void;
};
```

## 4. interface 만 가능한 것

- interface 를 동일한 이름으로 재정의 가능

```ts
interface Dog {
  name: string;
}
interface Dog {
  age: number;
}
interface Dog {
  bark: () => void;
}
const a: Dog = {
  name: "Buddy",
  age: 5,
  bark: () => console.log("Woof!"),
};
// 중복선언 안됨
type Dogs = Dog[];
type Dogs = Dog[];
```

## 5. type 만 가능한 것

- interface 는 객체의 모양만 만들수 있다.

```ts
// 유니온문법
type Dir = "UP" | "DOWN" | "LEFT" | "RIGHT";
type Result = string | number | boolean;
// 배열, 튜플(배열인데, 개수와 종류를 미리 정의)
type Point = [number, number];
```

## 6. 클래스에서 implements 는 `interface 권장`

```ts
interface 약속 {
  name: string;
}
class Person implements 약속 {
  name: string;
}
// 아래도 가능함. 하지만?
type 약속타입 = {
  name: string;
};
class Dog implements 약속타입 {
  name: string;
}
```

## 7. 일반적 기준

- 객체 모양을 정의하는 경우 : interface 권장
- 여러 타입을 조합한다. : type 권장
- 복잡한 타입(속성에 함수, 유니온 등등) : type 권장
- 여러명에서 작업을 한다면 : interface 권장
