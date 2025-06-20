# 함수 (function)
- 데이터를 가공해서 원하는 결과를 자동으로 만들어 주는 기계(기능)

## 1. 기본형태
```ts
function 함수명(parameter:type): returnType {
  // 하고 싶은일
  return returnValue;
}

함수명(argument)
```

## 2. 언제 함수라는 것을 생성해야 할까
- 하나의 과정이 너무 길다. (즉, 코드가 너무 길다.)
- 동일한 코드가 2번이상 반복 작성해야 한다면?
- 동일한 기능을 다른 사람에게 주어야 한다면?

## 3. 함수를 만들때 권장하는 방안
- 반드시 설명서를 만들어 주자(`JSDoc`)

## 4. 계산기 예제
- 요구사항 명세서 작성
```txt
재료 : 숫자 2개가 재료
기능 : 사칙연산 기능(+, -, *, /)
```
```ts
//JSDoc
/**
 * 사칙연산 함수
 * - 숫자 2개를 입력하시면 결과가 나옵니다.
 * - 기호는 4가지(+, -, * /)를 사용하실 수 있습니다.
 *
 * 사용예시
 * ```javascript
 * const result:number = calc(5, 4, "+");
 * ```
 * @param {number} a
 * @param {number} b
 * @param {string} sign
 * @returns {number}
 */

function calc (a:number, b:number, sign:string):number {
    let result: number = 0;
    
    switch (sign) {
        case ("+"):
            result = a + b;
            break;
        case ("-"):
            result = a - b;
            break;
        case ("*"):
            result = a * b;
            break;
        case ("/"):
            result = (a !== 0 && b !== 0) ? a / b : 0
            break;
    }
    return result;
};
```