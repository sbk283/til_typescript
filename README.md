# Scope (범위)
- 변수가 살아남는 범위
- 변수를 찾아서 사용할 수 있는 범위
## 1. Scope 종류
- `전역` 스코프 : 코드에서 어디에서든 접근 및 사용가능 (`var`, let, const)
- `지역` 스코프 : `function` 또는 `{}` 안쪽에서만 사용가능
- `블록` 스코프 : {} 블록 안에서만 사용가능(if, for 등에서 let, const)

## 2. 전역 스코프 간단예제
- 코드 어디서나 사용할 수 있는 범위
```js
let message = "안녕"; // 전역 스코프
function sayHello() {
  console.log(message);
}
sayHello();
```

```js
let message: string = "안녕"; // 전역 스코프
function sayHello(): void {
  console.log(message);
}
sayHello();
```

## 3. 지역 스코프 간단예제(로컬범위)
```js
function sayHello() {
  let message - "안녕"
  console.log(message);
}
sayHello();
```

```ts
function sayHello(): void {
  let message: string = "안녕"
  console.log(message);
}
sayHello();
```

```js
let message = "안녕"; // 전역 스코프
function sayHello() {
  console.log(message);
}
const sayHello() {
  console.log(message);
}
sayHello();
```

```ts
let message: string = "안녕"; // 전역 스코프
function sayHello(): void {
  console.log(message);
}
const sayHello(): void {
  console.log(message);
}
sayHello();
```

## 4. 전역과 지역 스코프 간단예제
```js
let message = "안녕";
function sayHello() {
  let message = "Hi~";
  console.log(message);
}
sayHello(); // Hi~ 출력 : 지역 스코프 우선순위
```

```ts
let message: string = "안녕";
function sayHello(): void {
  let message: string = "Hi~";
  console.log(message);
}
sayHello(); // Hi~ 출력 : 지역 스코프 우선순위
```

## 5. 블록 스코프 간단예제
- var 가 스트레스를 줄겁니다.
- 옛날 코딩에는 var 를 사용했습니다. 문제가 많습니다.

```js
// 블록 스코프 예제
const age = 0;
{
    const age = 10;
    const subject = "공부";
}
console.log(age); // 0 을 출력
console.log(subject); // 오류, Not defined ...
```

```ts
// 블록 스코프 예제
const age:number = 0;
{
    const age:number = 10;
    const subject:string = "공부";
}
console.log(age); // 0 을 출력
console.log(subject); // 오류, Not defined ...
```

```js
// 블록 스코프 예제
let age = 0;
{
    let age = 10;
    let subject = "공부";
}
console.log(age); // 0 을 출력
console.log(subject); // 오류, Not defined ...

```

```ts
// 블록 스코프 예제
let age: number = 0;
{
    let age: number = 10;
    let subject: string = "공부";
}
console.log(age); // 0 을 출력
console.log(subject); // 오류, Not defined ...
```
- var 는 Scope 가 규칙적이지 않고, 무조건 전역으로 생성됨.
```js
// 블록 스코프 예제
var age = 0;
{
    var age = 10;
    var subject = "공부";
}
console.log(age); // 10 을 출력
console.log(subject); // 공부 를 출력
```

```ts
// 블록 스코프 예제
var age:number = 0;
{
    var age:number = 10;
    var subject:string = "공부";
}
console.log(age); // 10 을 출력
console.log(subject); // 공부 를 출력
```
- var 는 `{}` 블록 스코프는 없고, function 지역 스코프는 있다.
```js
var age = 0;
{
    var age = 100;
}
console.log(age);
showAge();
console.log(age);
```

```ts
// 블록 스코프 예제
var age:number = 0;
{
    var age:number = 10;
    var subject:string = "공부";
}
console.log(age); // 10 을 출력
console.log(subject); // 공부 를 출력
```

## 6. 전체 스코프 정리
- let, const 는 {} 에 따라 스코프가 정리된다.
- var 는 function 에 따라 스코프가 정리된다.
```js
// 전역 스코프
let age = 0;            // 전역 블록에 선언된 age (전역 변수)
const job = "학생";     // 전역 블록에 선언된 job (전역 상수)

// 블록 스코프
{
    let age = 100;       // 이 블록 내부에서만 유효한 지역 변수 age
    let job = "개발자";  // 이 블록 내부에서만 유효한 지역 상수 job
    // 전역의 age와 job에는 영향을 주지 않음
}

// 함수 스코프
function showPerson() {
    let age = 400;       // 함수 showPerson 내부에서만 유효한 지역 변수 age
    let job = "요리사";  // 함수 showPerson 내부에서만 유효한 지역 상수 job
    // 함수 외부에서는 접근 불가능
}

// 조건문 블록 스코프
if (true) {
    let age = 800;       // 이 if 블록 내부에서만 유효한 지역 변수 age
    let job = "직원";    // 이 if 블록 내부에서만 유효한 지역 상수 job
    // 전역의 age와 job에는 영향을 주지 않음
}

```

```js
var age = 0;           // 전역 변수 age 선언 및 초기화 (0)
var job = "학생";      // 전역 변수 job 선언 및 초기화 ("학생")

{
    // var는 블록 스코프를 가지지 않음 → 아래 선언은 전역 변수 age와 job을 덮어씀
    var age = 100;     // 전역 변수 age를 100으로 덮어씀
    var job = "개발자"; // 전역 변수 job을 "개발자"로 덮어씀
    // 이 블록 바깥에서도 age는 100, job은 "개발자" 상태임
}

function showPerson() {
    // 함수 내부이므로 이 age, job은 함수 스코프에 국한됨
    var age = 400;     // showPerson 함수 내부에서만 유효한 age
    var job = "요리사"; // showPerson 함수 내부에서만 유효한 job
    // 이 함수가 호출되지 않는 한 위 값들은 실행되지 않음
}

if (true) {
    // if 문도 블록이지만 var는 블록 스코프가 없음 → 전역 변수 덮어씀
    var age = 800;     // 전역 변수 age를 800으로 덮어씀
    var job = "직원";   // 전역 변수 job을 "직원"으로 덮어씀
}
```

## 7. 간단 문답
```js
if(true) {
    let age_1 = 100;
    var age_2 = 200;
}
console.log(age_1); // 에러
console.log(age_2); // 200

// 결론, var 쓰지말자 !!
```

# 호이스팅의 이해 (변수에서)
- 만들지 않았는데 사용가능한 것(좋지않다.)

## 1. 호이스팅이 일어나지 않는 경우
```js
console.log(age); // 에러
let age = 10; 
```

```js
let age = 10; 
console.log(age); // 10
```

```js
console.log(age); // 에러
const age = 10; 
```

```js
const age = 10; 
console.log(age); // 10
```

## 2. 호이스팅이 일어나는 경우
```js
console.log(age); // undefined
var age = 10; 
console.log(age); // 10
```

# 변수의 재정의
## 1. 재정의 불가능한 경우
- 불가능한 경우
```js
let age = 10;
let age = 100;

const job = "학생";
const job = "개발자";
```

- 가능한 경우
```js
let age = 10;
{
    let age = 100;
}

const job = "학생";
{
    const job = "개발자";
}
```

## 2. 막~ 재정의 하는 경우

```js
var age = 10;
var age = 100; // age 변수에 100을 다시 할당

var job = "학생";
var job = "개발자"; // job 변수에 "개발자"를 다시 할당

console.log(age);   // 출력: 100
console.log(job);  // 출력: "개발자"
```

```js
var age = 10;
{
    var age = 100; // 블록 안에서 재선언했지만, 전역 스코프의 age에 영향을 줌
}

var job = "학생";
{
    var job = "개발자"; // 블록 안에서 재선언했지만, 전역 스코프의 job에 영향을 줌
}

console.log(age);   // 출력: 100
console.log(job);  // 출력: "개발자"
```

#  그렇다면 let, const, var 중에 무엇을 우선으로 할까?
## 1. 무조건 const 로 하세요.
```js
const age = 0;
```

## 2. 코딩을 하다보니 값이 변경이 되어야 한다면
- 진행중에 필요에 의해서 let 으로 수정한다.
```js
const age = 0;

age = 17;
```

# 함수에서의 스코프
## 1. 중첩 함수
- 데이터를 숨기고, 기능도 숨기고

```js
function 외부() {
    const nickName = "홍길동";
    // 중첩함수
    function 내부() {
        console.log(nickName);
    }
    내부();
}
console.log(nickName); // error

내부(); // error

외부(); // 홍길동
```

```ts
function 외부(): void {
    const nickName: string = "홍길동";
    // 중첩함수
    function 내부(): void {
        console.log(nickName);
    }
    내부();
}
console.log(nickName); // error

내부(); // error

외부(); // 홍길동
```

## 2. 함수 외부 변수 접근 제한
- 데이터를 숨긴다.(password)
- 원하는 동작만으로 데이터를 확인시킨다.(내부함수)
```js
function 외부() {
    const password = "1234";
    function 내부() {
        return password;
    }
    return 내부;
}

const 기능 = 외부();
const result = 기능();
password; // 오류

```

```ts
type returnType = () => string
function 외부(): returnType {
    const password: string = "1234";
    function 내부(): string {
        return password;
    }
    return 내부;
}

const 기능 = 외부();
const result = 기능();
password; // 오류

```

## 3. 클로저(closer)
- 함수는 실행하고 나면 함수 종료시 함수 내부의 변수는 제거됨.
- 그런데 함수를 실행하고 함수 종료 후에도 내부 변수를 유지하는 것.
- react 자체가 함수며 클로저다.

- 일반적 함수
```js
function showAge() {
    const age = 10;
    console.log(age);
}
showAge();
```

```ts
function showAge(): void {
    const age:number = 10;
    console.log(age);
}
showAge();
```
- 클로저로 변수값 유지하기
```js
function showAge() {
    let age = 10;
    // 아래가 클로저
    return function() {
        age = age + 1;
        return age;
    };
}
const a = showAge();
a(); // 11
a(); // 12
```

```ts
type returnType = () => number;
function showAge(): returnType {
    let age:number = 10;
    // 아래가 클로저
    return function(): number {
        age = age + 1;
        return age;
    };
}
const a = showAge();
a(); // 11
a(); // 12
```

- 클로저로 배열의 요소 관리하기
```js
function createList() {
    let itemArr = [];

    return {
     // add:(재료) 에 재료를 담으면 itemArr에 추가.
        add(item) {
        itemArr.push(item);
    },
    // show(): 전체 itemArr 보여주기
    show() {
      return itemArr;
    },
  };
}

const myList = createList();
myList.add("사과");
myList.add("딸기");
myList.show(); // []"사과", "딸기"]

// itemArr // Error 스코프 위반
```
- 클로저는 `함수 안쪽의 데이터를 유지`한다.

```ts
z

const myList: returnType = createList();
myList.add("사과");
myList.add("딸기");
myList.show(); // []"사과", "딸기"]

// itemArr // Error 스코프 위반
```