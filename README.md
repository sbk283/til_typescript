# TS 심화 - Casting (캐스팅)

- VScode 는 타입을 추론한다.
- `특정한 타입으로 추론을 하라고 지시`할 수 있다.
- `as` 문법
- any 를 안쓸순 없다. 원하는 타입은 as 를 활용한다.

```ts
let number: any = 5;
number = "hello";
number = true;
number = 100;

// 강제로 데이터 타입을 지정하기 위한 처리
let temp = number as string;
temp.toUpperCase(); // 대문자로 바꿔라
```
