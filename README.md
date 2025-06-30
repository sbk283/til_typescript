# 배열
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array
- 데이터의 종류와 상관없이 묶어서 관리함.
- 데이터들은 순서(index) 로 접근함.

## 1. 배열 만드는 법

```js
const 배열명 = [요소1, 요소2, 요소3, ......];
// 아래는 잘 활용하지 않음.
const 배열명 = new Array(5); // 5개의 데이터를 담아둘 배열
```

```ts
const 배열명: 종류[] = [요소1, 요소2, 요소3, ......];
const 배열명: Array<종류> = [요소1, 요소2, 요소3, ......];

// 아래는 잘 활용하지 않음.
const 배열명: 종류[] = new Array(5); // 5개의 데이터를 담아둘 배열
```

## 2. 배열에 요소에 값을 찾아서 활용하기

- index 는 `0` 번부터

```js
const 배열명 = [요소1, 요소2, 요소3];
배열명[0];
배열명[1];
배열명[2];
```

```ts
const 배열명: 종류[] = [요소1, 요소2, 요소3];
배열명[0];
배열명[1];
배열명[2];
```

## 3. 배열도 객체라서 속성이 있음. (`length`만 존재)

```js
const 배열명 = [요소1, 요소2, 요소3];
배열명.length; // 3 개
```

```ts
const 배열명: 종류[] = [요소1, 요소2, 요소3];
배열명.length; // 3 개
```

## 4. 원본 배열이 변경되는 이미 만들어진 메서드
- push : 배열에 마지막에 요소 `추가`
```js
const fruitsArray = ["사과", "딸기"];
fruitsArray.push("수박"); // 사과 딸기 수박
// 원본이 훼손됨
```

```ts
const fruitsArray: string[] = ["사과", "딸기"];
fruitsArray.push("수박"); // 사과 딸기 수박
// 원본이 훼손됨
```
- pop : 배열에 마지막 요소 `제거`
```js
const fruitsArray = ["사과", "딸기"];
fruitsArray.pop(); // 사과
// 원본 배열이 훼손됨
```

- unshift : 배열에 첫번째 요소 `추가`
```js
const fruitsArray = ["사과", "딸기"];
fruitsArray.unshift("수박"); // 수박 사과 딸기
// 원본 배열이 훼손
```

- shift : 배열에 첫번째 요소 `제거`
```js
const fruitsArray = ["사과", "딸기"];
fruitsArray.shift(); // 딸기
// 원본 배열이 훼손됨
```

- splice : 배열에 요소 `추가` 또는 `제거`
```js
const fruitsArray = ["사과", "딸기", "수박"];
fruitsArray.splice(1, 2); // 사과
// 원본 배열이 훼손됨
```

- sort : 배열에 요소 `정렬`
```js
const fruitsArray = ["사과", "딸기", "수박"];
fruitsArray.sort(); // 딸기 사과 수박
// 원본 배열이 훼손됨

const enArr = ['k', 'o', 'r', 'e', 'a'];
enArr.sort(); // a e k o r
// 원본 배열이 훼손됨

const numArr = [2,3,9,7,5];
numArr.sort(); // 2 3 5 7 9
// 원본 배열이 훼손됨

const numArr2 = [1,12,3,19,7,5];
numArr2.sort(); // 1 3 5 7 12 19
// 위의 결과는 일반적이지 않다.
// 올림차순
numArr2.sort((a, b) => a - b); // 1 3 5 7 12 19
// 내림차순
numArr2.sort((a, b) => b - a); // 19 12 7 5 3 1
// 원본 배열이 훼손됨
```

```ts
const fruitsArray: string[] = ["사과", "딸기", "수박"];
fruitsArray.sort(); // 딸기 사과 수박
// 원본 배열이 훼손됨

const enArr: string[] = ['k', 'o', 'r', 'e', 'a'];
enArr.sort(); // a e k o r
// 원본 배열이 훼손됨

const numArr: number[] = [2,3,9,7,5];
numArr.sort(); // 2 3 5 7 9
// 원본 배열이 훼손됨

const numArr2: number[] = [1,12,3,19,7,5];
numArr2.sort(); // 1 3 5 7 12 19
// 위의 결과는 일반적이지 않다.
// 올림차순
numArr2.sort((a, b) => a - b); // 1 3 5 7 12 19
// 내림차순
numArr2.sort((a, b) => b - a); // 19 12 7 5 3 1
// 원본 배열이 훼손됨
```
- reverse : 배열의 순서를 `역`으로 정렬함
```js
const numArr = [1, 2, 12, 25, 37, 30];
numArr.reverse(); // 30 37 25 12 2 1
// 원본 배열이 훼손됨
```

- fill : 요소에 값을 `채움`
```js
const numArr = [2, 5, 4, 7];
numArr.fill(0); // 0 0 0 0
// 원본 배열이 훼손됨
```

## 5. 원본 배열을 복사해서 활용하는 이미 만들어진 메서드 (⭐️⭐️⭐️⭐️⭐️)
- 데이터 불변성 (immutability) 을 유지하는 메서드
- `원본 배열`과 `복사본 배열`의 `요소를 비교`해서 다르면 화면 새로 그림(re-rendering)

### 5.1. map
- 원본 배열을 복사하여 새로운 배열 생성
```js
const 원본배열 = [1, 2, 3, 4];
const 복사본배열 = 원본배열.map(function (요소, 인덱스, 원본배열) {
    return 요소; // [1, 2, 3, 4]
});
// html 예제
const 복사본배열 = 원본배열.map(function (요소, 인덱스, 원본배열) {
    return `<div>${요소}</div>`; // <div>1</div>, <div>2</div>, <div>3</div>, <div>4</div>
});
```

## 5.2. filter
- 조건이 `참`인 것만 모은 배열생성
```js
const numArr = [1, 4, 3, 5, 8, 9];
const arr = numArr.filter(function (요소, 인덱스, 원본배열) {
    if (요소 % 2) {
        return 요소;
    }
});
```

```js
const hong = {age: 10, study: true};
const kim = {age: 20, study: false};
const park = {age: 22, study: true};
const studentArr = [hong, kim, park];
const 공부한사람배열 = studentArr.filter(function (요소, 인덱스, 원본배열) {
    if (요소.study) {
        return 요소;
    }
});
```

```ts
type Student = { age: number, study: boolean };
const hong: Student = {age: 10, study: true};
const kim: Student = {age: 20, study: false};
const park: Student = {age: 22, study: true};
const studentArr: Student[] = [hong, kim, park];
const 공부한사람배열: Student[] = studentArr.filter(function (
    요소, 인덱스, 원본배열) {
    if (요소.study) {
        return 요소;
    }
});
```
### 5.3. concat :여러개의 배열을 하나로 합친 배열
```js
const numArr = [2,4,5,8,2];
const strArr = ['a', 'b', 'c'];
const arr = numArr.concat(strArr); // [2, 4, 5, 8, 2, 'a', 'b', 'c']

const result = [];
for (let i = 0; i < numArr.length; i++) {
    result.push(numArr[i]);
}
for (let i = 0; i < strArr.length; i++) {
    result.push(strArr[i]);
}
```
### 5.4. join : 하나의 문자열로 배열을 표현하기
```js
const numArr = [2, 4, 5, 8, 2];
const str = numArr.join(); // '2,4,5,8,2'
const str2 = numArr.join("@"); // '2@4@5@8@2'
```

### 5.5. includes : 배열에 요소가 있는지 확인하기
```js
const numArr = [2, 4, 5, 8, 2];
const result = numArr.includes(4); // true
const result2 = numArr.includes(6); // false
```

```ts
const numArr: number[] = [2, 4, 5, 8, 2];
const result: boolean = numArr.includes(4); // true
const result2: boolean = numArr.includes(6); // false