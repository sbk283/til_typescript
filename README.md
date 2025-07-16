# TypeScript 복습

- 굳이 타입을 작성하지 않아도 괜찮다.
- VSCode 가 `타입추론` 을 잘해준다면 생략하자.

## 총 7가지의 기본 타입

```ts
let strVar = "String";
let numVar = 123;
let bigIntVar = BigInt(12345678901234567890);
let boolVar = true;
let symVar = Symbol("symbol");
// 아래는 타입추론이 문법적으로 다르다.
let nullVar = null; // 타입추론 결과는 any
let nullVar2: null = null; // 타입추론 결과는 null
let undefinedVar = undefined; // 타입추론 결과는 any
let undefinedVar2: undefined = undefined; // 타입추론 결과는 undefined
// 직접 타입에 관여해야함.
```

## TS 에만 존재하는 기본형 타입

### 1. any

- 정말 자주 사용합니다. 타입이 중요하지 않을때
- 사용은 하지만, 과도하게 사용은 하지말자.
- `치트키`
- any 타입은 어디에나 사용가능
- any 타입은 어느곳에도 할당, 즉 대입이 가능함.

```ts
let anyVar: any = 42;
let strVar = anyVar;
let numVar = anyVar;
let bigintVar = anyVar;
let boolVar = anyVar;
let symVar = anyVar;
let nullVar = anyVar;
let undefinedVar = anyVar;
```

### 2. unknown

- any 와 용도가 비슷한 느낌
- any 처럼 어떤것도 값을 담을 수 있다.
- 다른 변수에 담기, 즉 할당은 못함
- 입력은 되지만, 할당하지는 못하는 특징

```ts
let unknownVar: unknown;
unknownVar = 42;
unknownVar = "Hello, world!";
unknownVar = true;

// 아래부터는 에러
let numVar: number = unknownVar;
// `unknown` 형식은 `number` 형식에 할당할 수 없다.
```

### 3. never

- 어떤 타입도 `저장 또는 리턴하지 않겠다`는 의지표현
- 절대로 발생하지 않을 것이라는 의지표현
- 예외처리, 무한루프 처리에 활용

```ts
// 아래는 전부 다 에러
let neverVar1: never = null;
let neverVar2: never = undefined;
let neverVar3: never = 1234;
let neverVar4: never = "hello";
```

# TS 심화 - 목록(배열) 타입

- 리스트 타입

```ts
// 타입추론이 잘 정리됨
let numberArr = [1, 2, 3, 4, 5];
let stringArr = ["a", "b", "c", "d", "e"];
let arr = [1, "a", true, null, undefined];
```

```ts
// 제네릭으로 구성
let numberArr: Array<number> = [1, 2, 3, 4, 5];
let stringArr: Array<string> = ["a", "b", "c", "d", "e"];
let arr: Array<number | string | boolean | null | undefined> = [
  1,
  "a",
  true,
  null,
  undefined,
];
```

# TS 심화 - Type, Interface 타입

## 1. type 키워드로 정의하기.

- 기본형 타입도 type 키워드로 정의할 수 있다.

```ts
// 기본형 타입도 type 키워드로 별칭을 만들 수 있다.
type HiType = string;
const hi: HiType = "Hello, World!";

type ageType = number;
const age: ageType = 30;
```

- `복잡한 객체 형태`의 데이터도 type 키워드로 별칭을 만들 수 있다.

```ts
type IdolType = {
  name: string;
  age: number;
  year: number;
};

let bts: IdolType = {
  name: "BTS",
  age: 20,
  year: 2013,
};
```

## 2. interface 키워드로 정의하기.

- 복잡한 타입에 대한 정의
- type 과 비슷하지만 `객체가 대상`이다.

```ts
interface IdolType {
  name: string;
  age: number;
  year: number;
}

let bts: IdolType = {
  name: "BTS",
  age: 20,
  year: 2013,
};
```

## type 과 interface 정의시 옵셔널 적용 가능

- 선택적 속성 설정

```ts
interface IdolType {
  name: string;
  age?: number; // 옵셔널
  year: number;
}

let bts: IdolType = {
  name: "BTS",
  year: 2013,
};
```

```ts
type IdolType = {
  name: string;
  age?: number; // 옵셔널
  year: number;
};

let bts: IdolType = {
  name: "BTS",
  year: 2013,
};
```
