# type 키워드

## 1. type 키워드를 사용하는 이유

- 길게 작성되는 타입을 `짧게 줄여서 사용`하려고

```ts
const user: { name: string; age: number; job: string } = {
  name: "아이유",
  age: 25,
  job: "가수",
};
```

```ts
type User = {
  name: string;
  age: number;
  job: string;
};
const user: User = {
  name: "아이유",
  age: 25,
  job: "가수",
};
```

- 코드를 더 간편하게 읽게하려고

```ts
type Subject = "국어" | "영어" | "수학";
const test: Subject = "국어";

type score = number;
const aaa: score = 95;
```

- `재활용`하려고 사용한다.

```ts
type Student = {
  name: string;
  age: number;
  major: string;
};

const iu: Student = {
  name: "아이유",
  age: 25,
  major: "음악",
};

const jimin: Student = {
  name: "지민",
  age: 26,
  major: "노래",
};
```

- 실수를 방지하려고

```ts
type Gender = "male" | "female";
const g: Gender = "male";
console.log(g);
```

## 2. type 키워드로 정의하는 법

### 2.1. `기본 타입`을 type 으로 정의하기.

```ts
// const name: string = "아이유";
type UserName = string;
const name: UserName = "아이유";

// const age: number = 28;
type UserAge = number;
const age: UserAge = 28;

// const isMember:boolean = true;
type IsMember = boolean;
const isMember: IsMember = true;
```

- 추후 진행시에는 type 에 대한 정의를 먼저 고민해보자.

```ts
type UserName = string;
type isMember = boolean;
type UserAge = number;

const name: UserName = "아이유";
const age: UserAge = 30;
const isMember: isMember = true;
```

### 2.2. `객체`는 type 으로 정의하기

- `{속성명: 속성값, 속성명: 속성값}` 처럼 여러개를 묶어둔 형태.

```ts
type Student = {
  name: string;
  age: number;
  major: string;
};
const iu: Student = {
  name: "아이유",
  age: 30,
  major: "가수",
};
```

### 2.3. `확장`이 가능하다. (기존 type 을 확장해서 또 다른 type 을 작성)

```ts
type Person = {
  name: string;
  age: number;
};
// 확장을 하지 않은 경우
type Developer = {
  name: string;
  age: number;
  job: string;
};
// 확장을 한 경우
type Teacher = Person & {
  major: string;
};
const kim: Teacher = {
  name: "kim",
  age: 30,
  major: "과학",
};
```

### 2.4. 유니온(`|`) 문법도 제공함.

- 여러개 중 하나

```ts
type Select = "OK" | "NO" | "CANCEL";
let userSelect: Select = "OK";
userSelect = "CANCEL";
userSelect = "NO";

userSelect = "싫어요"; // 코딩중 오류가 발생
```

### 2.5. 인터셉션(&) 문법도 제공함.

- `모두 만족해야 함`

```ts
type Animal = {
  eyes: number;
};
type Cat = {
  mustash: boolean;
};
type MyCat = Cat & Animal;
const cat: MyCat = {
  eyes: 2,
  mustash: true,
};
```

### 2.6. Optional Property (`?`)

- 선택적 옵션속성

```ts
type Person = {
  name: string;
  age: number;
  // 선택적 옵션
  gender?: string;
};

const iu: Person = {
  name: "아이유",
  age: 30,
};
```

### 2.7. Readonly Property (`readonly`)

- 읽기 전용 속성
- `단 한번의 값 세팅, 이후 변경 불가`

```ts
type Person = {
  name: string;
  age: number;
  // 선택적 옵션
  gender?: string;
  // 읽기 전용
  readonly job: string;
};

const iu: Person = {
  name: "아이유",
  age: 30,
  job: "가수",
};

iu.age = 31; // 가능
iu.job = "가수"; // 불가능 // 읽기 전용 속성은 수정할 수 없음
```

### 2.8. type 안의 type

```ts
type Address = {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  geo?: Geo;
};
type Geo = {
  lat: number;
  lng: number;
};

const user: Address = {
  street: "123 Main St",
  city: "Anytown",
  state: "CA",
  zipCode: "12345",
  geo: {
    lat: 37.7749,
    lng: -122.4194,
  },
};
```

### 2.9. index signature

- type 객체 정의에서 `속성명을 미리 지정하지 않기`
- 실시간으로 객체 타입 생성됨

```ts
type ScoreType = {
  [subject: string]: number | string;
};
const score: ScoreType = {
  과학: 90,
  수학: 85,
  영어: 88,
  국어: 92,
  사회: 80,
};

const myScore: ScoreType = {
  수학: 90,
  과학: 95,
  미술: "A+",
};
```

### 2.10. 객체 배열 타입 정의

```ts
type Person = {
  name: string;
  age: number;
};
const human: Person[] = [
  {
    name: "hong",
    age: 20,
  },
  {
    name: "park",
    age: 40,
  },
  {
    name: "lee",
    age: 30,
  },
  {
    name: "jimin",
    age: 26,
    job: "singer", // job 은 오류
  },
];
```

### 2.11. 함수 타입 정의

- 입력값, 리턴값 모두 타입을 정의할 수 있다.
- `type 타입명: (매개변수:타입) => 리턴값타입`

```ts
type Add = (a: number, b: number) => number;
```

- 기본형: 매개변수가 없고, 리턴도 없다.

```ts
// 1단계
const hello = () => {
  console.log("Hello, World!");
};
// 2단계
const hello_2: () => void = () => {
  console.log("Hello, World!");
};
// 3단계
type SayHello = () => void;
const hello_3: SayHello = () => {
  console.log("Hello, World!");
};
```

- 매개변수가 있는경우

```ts
const hello = (msg: string) => {
  console.log(msg);
};
type SayHello = (msg: string) => void;
const hello2: SayHello = (msg) => {
  console.log(msg);
};
```

- 매개변수도 있고 리턴도 있는경우

```ts
const hello = (msg: string, word: string) => {
  return msg + word;
};
type SayHello = (msg: string, word: string) => void;
const hello2: SayHello = (msg, word) => {
  return msg + word;
};
const hello3: SayHello = (msg, word) => {
  return msg + word;
};
```

- 선택적 매개변수

```ts
const hello = (msg: string, word?: string): void => {};

type SayHello = (msg: string, word?: string) => void;
const hello3: SayHello = (msg, word) => {};
```

- 타입 객체에 함수 정의하기
```ts
type Calculator = {
  name: string;
  add: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
  multi: (a: number, b: number) => number;
  divide: (a: number, b: number) => number;
};
const calc: Calculator = {
  name: "계산기",
  add: (a, b) => a + b,
  minus: (a, b) => a - b,
  multi: (a, b) => a * b,
  divide: (a, b) => a / b,
};
calc.name; // "계산기"
calc.add(1, 2); // 3
calc.minus(5, 3); // 2
calc.multi(2, 3); // 6
calc.divide(6, 2); // 3
```
