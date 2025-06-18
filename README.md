# Primitive 타입
- 기본적인 데이터 종류
- 변수명 : DataType = 값

## 1. number 타입
```ts
const num_1 = 1;
const num_2: number = 2;
const num_3: number = 12.1;
const num_4: number = -100;
const num_5: number = Infinity;
const num_6: number = -Infinity;
const num_7: number = NaN;
```

## 2. string 타입
```ts
const str_1 = "안녕";
const str_2: string = "반가워";
let str_3: string|number = "김밥";
str_3 = "맛있다";
str_3 = 1000;
```

## 3. boolean 타입
```ts
const bool_1 = false;
const bool_2: boolean = false;
let bool_3: boolean = false;
```

## 4. null 타입
- 프로그래머가 변수에 값이 비었음을 표현
```ts
const null_1 = null;
let null_2:null = null;
```
## 5. undefined 타입
- 프로그램이 초기값으로 세팅함
```ts
let user:undefined = undefined;
```

## 6. 만약 강제로 null 을 넣는다면?
```ts
let count:number = null; //타입에러
```

- 그러나, null은 어디든 대입 가능해야 함.
- tsconfig.json
```json
{
  "include": ["src/**/*"],
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "outDir": "./disk",
    "strict": true,
    "moduleDetection": "force",
    "strictNullChecks": false, // 여기서 허용함.
  }
}
```

## 7. 오로지 하나의 값만 보관하는 법.
- const 를 활용 추천
```ts
let a:1 = 1;
let b: "안녕" = "안녕";
let c: true = true;
```

## 8. 정말 중복되지 않은 유일한 값
```ts
const sy = Symbol("age");
const syS:symbol = Symbol("name");
```

## 9. 기본형 데이터 종류 정리(JavaScript 에도 존재)
- 총 7가지가 존재한다.
```ts
const strVar:string = "string";
const numVar:number = 0;
const boolVar:boolean = true;
const symVar:symbol = Symbol("age");
const nullVar:null = null;
const undeVar: undefined = undefined;
const bigIntVar: bigint = BigInt(99999999);
```

## 10. 오로지 TypeScript에만 존재하는 데이터타입

### 10.1. any 타입
- any는 아무 값이나 대입할 수 있다.
- 치트키 라고 생각해 보자.
- any 는 타입체크를 포기하겠다.
- 과하게 사용하지말고 적절하게 사용 권장
```ts
let anyVar : any = 100;
anyVar = "안녕";
anyVar = true;
anyVar = null;
anyVar = undefined;
anyVar = Symbol("age");
anyVar = BigInt(999999999);

// TypeScript 는 실제 값의 종류를 따지는 것이 아니다.
// 데이터를 할당할 때 (대입할 때) 데이터 종류만 비교한다.
let testNum:number = anyVar;
```
- `any 타입은 어떤 다른 타입에도 값을 담을 수 있다.`
- `any 타입은 어떤 다른 타입에도 값을 할당 할 수 있다.`
- `any 타입은 어떤 다른 타입에도 값을 대입 할 수 있다.`

### 10.2. unknown 타입
- 데이터 종류를 모르겠다 (마치 any 처럼)
- 값으로 전달은 못한다. (any 와는 다르게)
```ts
let unknownVar : unknown = 100;
unknownVar = "안녕";
unknownVar = true;
unknownVar = null;
unknownVar = undefined;
unknownVar = Symbol("age");
unknownVar = BigInt(999999999);

// 전달시 unknownVar 은 타입오류 발생
let testNum:number = unknownVar;
```

### 10.3. never 타입
- 어떤 것도 담을 수 없고 어떤 곳에도 전달할 수도 없는 타입.
- 절대로 결과가 나오지 않는 함수의 리턴 데이터 종류
- 마지막에 결과로 에러를 던질 때
```ts
// 모두 에러입니다.
let neverVar1 : never = 100;
let neverVar2 : never = true;
let neverVar3 : never = undefined;
let neverVar4 : never = null;
```

# 응용 해보기
## 1. 회원가입을 필요로 한 항목명과 데이터를 정의해 보자.
- 필요로 한 항목을 우선 정리해보자.
- 무엇을 보관하고 싶은지 고민해 보자.

### 1단계
```txt
사용자 정보를 보관하고 싶다.
1. 이름
2. 주민번호 앞자리
3. 전화번호
4. 주소
5. 이메일
6. 아이디
7. 비밀번호
8. 개인정보동의
```

### 2단계
```txt
각 사용자 정보의 데이터 종류 즉 타입을 고민해 보자.
1. 이름 : 글자
2. 주민번호 앞자리 : 글자
3. 전화번호 : 글자
4. 주소 : 글자
5. 이메일 : 글자
6. 아이디 : 글자
7. 비밀번호 : 글자
8. 개인정보동의 : 참, 거짓
```

### 3딘계
- 코딩으로 표현하기 (변수명 정하기)
```js
// 각 사용자 정보의 데이터 종류 즉 타입을 고민해 보자.
// 1. 이름 : 글자
let userName;
// 2. 주민번호 앞자리 : 글자
let juminNum;
// 3. 전화번호 : 글자
let phoneNum;
// 4. 주소 : 글자
let address;
// 5. 이메일 : 글자
let email;
// 6. 아이디 : 글자
let id;
// 7. 비밀번호 : 글자
let pass;
// 8. 개인정보동의 : 참, 거짓
let policyCheck;
```

### 4단계
- 각 항목의 초기값 작성하기
```js
// 각 사용자 정보의 데이터 종류 즉 타입을 고민해 보자.
// 1. 이름 : 글자
let userName = "";
// 2. 주민번호 앞자리 : 글자
let juminNum = "";
// 3. 전화번호 : 글자
let phoneNum = "";
// 4. 주소 : 글자
let address = "";
// 5. 이메일 : 글자
let email = "";
// 6. 아이디 : 글자
let id = "";
// 7. 비밀번호 : 글자
let pass = "";
// 8. 개인정보동의 : 참, 거짓
let policyCheck = false;
policyCheck = "싫어요";
```

### 5단계
- TypeScript로 고민해보기
```ts
// 각 사용자 정보의 데이터 종류 즉 타입을 고민해 보자.
// 1. 이름 : 글자
let userName:string = "";
// 2. 주민번호 앞자리 : 글자
let juminNum:string = "";
// 3. 전화번호 : 글자
let phoneNum:string = "";
// 4. 주소 : 글자
let address:string = "";
// 5. 이메일 : 글자
let email:string = "";
// 6. 아이디 : 글자
let id:string = "";
// 7. 비밀번호 : 글자
let pass:string = "";
// 8. 개인정보동의 : 참, 거짓
let policyCheck:boolean = false;
```

# 변수명 생성법(명명법, 네이밍규칙(컨벤션) 적용하기)
```txt
1. 특수 기호 중 $ 와 _ 는 사용가능함.
2. 숫자로 시작할 수 없음
3. 공백은 포함 못함
4. 키워드(if, for, switch) 는 사용 못함
```
- 명사 그리고 영문을 권장합니다.
- 카멜(camel case) 명명법
```txt
1. 가장 많이 사용하는 방식으로 소문자로 시작
2. 새 단어는 대문자
let userName
```
- 스네이크(snake case) 명명법
```txt
1. 모두 소문자로 작성하며 단어마다 _ 기호가 붙는다.
let user_name
```
- 케밥(kebap case) 명명법
```txt
1. 모두 소문자로 작성
2. 단어 사이에 - 기호를 붙인다.
3. 케밥케이스는 코딩에 사용 못함.(주로 css 클래스명으로 활용)
let user-name
```

- 파스칼(pascal case) 명명법
```txt
1. 대문자로 시작한다.
2. 새로운 단어는 대문자로 시작.
3. 의미가 다릅니다. 관례상 (개발자간의 암묵적 약속)
- 객체 아닐까?
- 객체를 만드는 객체생성자 함수 아냐?
- 객체를 생성하는 클래스 아냐?

let Person;
let Swiper;
let UserInfo;
```
- 상수(const case) 명명법
```txt
1. 전체가 대문자 입니다.
2. 상수라고 해서 변하지 않는 값이라고 유추합니다.
const PI = 3.142;
const APP_NAME = "TODO";
```