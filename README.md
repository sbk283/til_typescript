# Generic

- `타입을 나중에 결정한다.`
- 제네릭을 `타입변수` 라고 정의하자.
- 일반적인 변수는 값을 변경하지만, 제네릭은 `타입`을 변경한다.

## 1. 문제 상황 살펴보기

- 매개변수의 `종류만 다르고` 기능은 같다.
- 아래 코드를 자주 보게된다.

```ts
// number 타입을 받는 함수
function showNumber(a: number): void {
  console.log(a);
}

showNumber(100);

// string 타입을 받는 함수
function showString(a: string): void {
  console.log(a);
}

showString("안녕");
```

- 매개변수의 종류를 `any` 로 하면 되겠다는 생각을 한다.
- 두 함수를 하나로 정리하는게 좋겠다.

```ts
function showarg(a: any): void {
  console.log(a);
}

showarg(100);
showarg("안녕");
```

- 위처럼 `any` 작업을 했더니 추가적인 기능이 필요하게 되었다.
- `any` 는 서비스 실행중 오류 발생함.
- 즉 코딩중 오류 확인 어려움. 예측불가.

```ts
function showargA(a: any): void {
  console.log(a);
  console.log(a.length);
}

showargA(0); // 실행중에 오류발생
showargA("안녕");
```

## 2. 문제 상황을 Generic 으로 해결해 보기.

```ts
// T 는 타입변수
function showargGeneric<T>(a: T): void {
  console.log(a);
}

showargGeneric(0);
showargGeneric("안녕");
```

- 아래의 코드는 아직도 오류로 처리된다.
- 하지만 실행중 오류가 아니고 코딩중 오류를 확인할 수 있다.

```ts
// T 는 타입변수
function showargGeneric<T>(a: T): void {
  console.log(a);
  // 아래의 문제는 타입 좁히기로 해결이 가능하다.
  console.log(a.length);
  // T가 string이면 length가 존재
  // T가 number이면 length가 존재하지 않음
}

showargGeneric(0);
showargGeneric("안녕");
```

- 우선 해결코드를 진행하고 다시 확인하자.

```ts
// T 는 타입변수
function showargGeneric<T>(a: T): void {
  console.log(a);
  // console.log(a.length); 아래에서 if 로 오류 처리 진행

  // 타입 좁히기
  if ((a as any).length !== undefined) {
    console.log((a as any).length);
  } else {
    console.log("length가 존재하지 않음");
  }
  // T가 string이면 length가 존재
  // T가 number이면 length가 존재하지 않음
}

showargGeneric(0);
showargGeneric("안녕");
```

## 3. 다양한 예제

```ts
// 배열의 요소를 출력하는 함수
// 그런데 배열의 요소의 타입을 제네릭으로 구현

function showItems(
  arr: (
    | string
    | number
    | boolean
    | { age: number }
    | { age: number; name: string }
  )[]
) {
  arr.forEach((item, index) => {
    console.log(`${index} 번째 요소는 ${item} 입니다.`);
  });
}
showItems(["a", "b", "c"]);
showItems([1, 2, 3, 4]);
showItems([true, true, false, true]);
showItems([{ age: 1 }, { age: 2 }, { age: 3 }]);
showItems([
  { age: 1, name: "hong" },
  { age: 2, name: "kim" },
  { age: 3, name: "park" },
]);
```

- 제네릭을 활용한 코드

```ts
// 배열의 요소를 출력하는 함수
// 그런데 배열의 요소의 타입을 제네릭으로 구현

function showItems<T>(arr: T[]) {
  arr.forEach((item, index) => {
    console.log(`${index} 번째 요소는 ${item} 입니다.`);
  });
}
showItems(["a", "b", "c"]);
showItems([1, 2, 3, 4]);
showItems([true, true, false, true]);
showItems([{ age: 1 }, { age: 2 }, { age: 3 }]);
showItems([
  { age: 1, name: "hong" },
  { age: 2, name: "kim" },
  { age: 3, name: "park" },
]);
```

```ts
// 복사를 하는 함수
function copyValue(
  a: number | string | boolean | number[] | string[]
): number | string | boolean | number[] | string[] {
  return a;
}
const result_1 = copyValue(1);
const result_2 = copyValue("안녕");
const result_3 = copyValue(true);
const result_4 = copyValue([1, 2, 3]);
const result_5 = copyValue(["a", "b", "c"]);
```

```ts
// 입력값 반환하기
function returnSame(input: any): any {
  return input;
}
const result_1: any = returnSame(1);
const result_2: any = returnSame("안녕");
const result_3: any = returnSame([1, 2, 3]);
```

- 제네릭

```ts
function returnSame<T>(input: T): T {
  return input;
}
const result_1 = returnSame(1);
const result_2 = returnSame("안녕");
const result_3 = returnSame([1, 2, 3]);
```

## 4. 함수에서 사용하는 제네릭

```ts
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

let result_1: number = getFirst([1, 2, 3]);
let result_2: string = getFirst(["a", "b", "c"]);
let result_3: string | number = getFirst([3, "b", "c"]);
```

```ts
function reverseArr<T>(arr: T[]): T[] {
  return [...arr].reverse();
}

let result_1: number[] = reverseArr([1, 2, 3]);
let result_2: string[] = reverseArr(["a", "b", "c"]);
let result_3: (string | number)[] = reverseArr([3, "b", "c"]);
```

```ts
function mergeArr<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
  return [...arr1, ...arr2];
}
let result: (string | number)[] = mergeArr([1, 2, 3], ["a", "b", "c"]);
```
