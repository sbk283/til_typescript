# 비동기(Asynchronous)

- `비동기 처리` 란 js 에서 너무 오래 시간 소비를 하는 작업
- 예) 백엔드 서버에게 자료를 요청하고 회신을 기다리는 경우
- 예) 파일을 읽어들이고, 서버로 파일을 전송하고, 결과를 기다리는 경우
- 비동기 처리는 시간이 많이 걸리는 작업 진행중에 다른 일도 병렬로 처리하도록 함.

## 1. 종류

- XHR(XML Http Request)
- Callback 함수
- Promise
- Async/Await

## 2. Dummy / Mockup 사이트 (백엔드 자료를 회신)

- [JSON Placeholder](https://jsonplaceholder.typicode.com/)
- [공공데이터포털](https://www.data.go.kr/)
- [Fake Store API](https://fakestoreapi.com/)

## 3. 백엔드 데이터 API 확인 프로그램

- [Postman](https://www.postman.com/)
- 백엔드 측에 `Swagger` 구성을 요청하면 참 좋다.

## 4. XHR(XML Http Request)

- `Request` 라는 단어를 알고 있어야한다. (자료 요청)
- `Response` 라는 단어를 알고 있어야한다. (결과 회신)
- `Query` 라는 단어를 알고 있어야한다. (질의문, Request 한 문자열)

### 4.1. 쿼리의 이해

- `https://isearch.interpark.com/result?q=부산&referrer=`
- 도메인 : `https://isearch.interpark.com`
- 라우터 경로 : `/result`
- 쿼리(자료요청 문자열)의 시작 : `?`
- 실제쿼리 : `q=부산&referrer=`

### 4.2. 실제쿼리 상세 설명

- 실제쿼리 : `q=부산&referrer=`
- 변수 q = `부산`
- `&` 로 구분
- referrer = `null`

### 4.3. 예제 분석

- https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=iu&ackey=fu7sz5z4

### 4.4. 쿼리를 전송할때는 5가지 방식으로 보낼수 있다.

- `CRUD` 방식
  - C : `Create` (생성)
  - R : `Read` (읽기)
  - U : `Update` (수정)
  - D : `Delete` (삭제)
- GET : 자료를 주세요. (DB 에서 자료 읽고 결과 회신)
- POST : 자료를 전송합니다. (DB 에서 자료 한개 추가)
- DELETE : 자료를 삭제하세요. (DB 에서 자료 한개 삭제)
- PUT : 하나의 자료내용 전부를 교체하세요. (DB 에서 자료 한개 전체수정)
- PATCH : 하나의 자료내용중 한 부분만 수정하세요. (DB 에서 자료 한개 중 일부수정)

### 4.5. XHR 로 비동기 작업해 보기

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      // 전체 게시글 요청하는 함수
      function getPosts() {
        console.log("전체자료 주세요.");
        // 1. xhr 객체를 만든다.
        const xhr = new XMLHttpRequest();

        // 2. 백엔드에서 알려준 주소로 접속한다.
        // xhr.open("방식", "주소")
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

        // 3. 만들어든 xhr 을 전송합니다.
        xhr.send();
        console.log("자료를 전송하였습니다.");
        console.log("다음 작업 진행합니다.");

        // 4. 백엔드에서 회신된 결과가 오면 실행합니다.
        xhr.onload = function () {
          console.log("요청 처리가 된 경우의 결과 : ", xhr);
          if (xhr.status === 200) {
            console.log(xhr.responseText);
          } else if (xhr.status === 404) {
            console.log("없는 페이지로 접속하셨습니다.");
          } else if (xhr.status === 505) {
            console.log("서버가 꺼졌습니다. 잠시 후 다시 시도해주세요.");
          }
        };
      }
      // 요청하기
      // getPosts();

      function getAlbums() {
        console.log("앨범전체 자료 요청");
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/albums");
        xhr.send();
        xhr.onload = function () {
          if (xhr.status === 200) {
            console.logt(xhr.responseText);
          } else if (xhr.status === 404) {
            console.log("주소 및 쿼리 확인하세요.");
          } else if (xhr.status === 505) {
            console.log("서버가 전원이 꺼졌습니다. 다시 시도해주세요.");
          }
        };
      }
      // getAlbums();

      function getPhotos() {
        console.log("사진 자료 요청");
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/photos");
        xhr.send();
        xhr.onload = function () {
          if (xhr.status === 200) {
            console.logt(xhr.responseText);
          } else if (xhr.status === 404) {
            console.log("주소 및 쿼리 확인하세요.");
          } else if (xhr.status === 505) {
            console.log("서버가 전원이 꺼졌습니다. 다시 시도해주세요.");
          }
        };
      }
      //getPhotos();

      function getTodos() {
        console.log("할일 자료 요청");
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");
        xhr.send();
        xhr.onload = function () {
          if (xhr.status === 200) {
            console.logt(xhr.responseText);
          } else if (xhr.status === 404) {
            console.log("주소 및 쿼리 확인하세요.");
          } else if (xhr.status === 505) {
            console.log("서버가 전원이 꺼졌습니다. 다시 시도해주세요.");
          }
        };
      }
      getTodos();
    </script>
  </body>
</html>
```

### 4.6. 콜백함수로 개선해 보기

- 코드 개선 시도
- 예) 주소와 메소드를 편리하게 개선
- `콜백헬이 발생할듯`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      /**
       * 지정된 주소로 Http 요청을 보내고 결과를 함수로 처리함.
       *
       * @param {string} addr - 요청을 보낼 URL (예: "posts", "albums")
       * @param {"GET"|"POST"|"PUT"|"DELETE"|"PATCH" } method - HTTP 메소드 종류
       * @param {(responseText:string) => void} callback - 요청 성공시 실행할 콜백함수
       */
      function getData(addr, method, callback) {
        const url = `https://jsonplaceholder.typicode.com/${addr}`;
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.send();
        xhr.onload = function () {
          if (xhr.status === 200) {
            // 콜백함수 자리
            callback(xhr.responseText);
          } else if (xhr.status === 404) {
            console.log(`${addr}쿼리가 잘못되었습니다. 확인하세요.`);
          } else if (xhr.status === 505) {
            console.log("서버가 오류입니다. 다시 시도해주세요.");
          }
        };
      }

      function postsParse(_data) {
        console.log("게시글 결과 ====");
        console.log(_data);
      }
      function albumsParse(_data) {
        console.log("앨범 결과 ====");
        console.log(_data);
      }
      function photosParse(_data) {
        console.log("사진 결과 ====");
        console.log(_data);
      }
      function todosParse(_data) {
        console.log("할일 결과 ====");
        console.log(_data);
      }
      getData("posts", "GET", postsParse);
      getData("albums", "GET", albumsParse);
      getData("photos", "GET", photosParse);
      getData("todos", "GET", todosParse);
    </script>
  </body>
</html>
```

### 4.7. HTTP Status의 이해

## 5. Promise

- `콜백 헬` 에 의한 단계별 실행과정에 대한 해결방안으로 제공
- 서버 연동이 끝날때, `성공 함수` 와 `실패 함수` 2개를 매개변수로 받아서 실행
- 2개의 함수는 서버연동이 완료되면 자동실행 되도록 구성.

### 5.1. Promise 는 2개의 매개변수(즉 콜백함수)를 받음

- resolve 콜백함수 : 백엔드 정상 결과 처리 함수
- reject 콜백함수 : 백엔드 오류 결과 처리 함수

### 5.2. Promise 는 세가지의 상태가 있다

- 대기중(Pending) : 결과를 대기중...
- 이행됨(Resolved) : 성공됨!
- 거부됨(Rejected) : 실패됨!

### 5.3. Promise chaining 예제

```js
return new Promise(function (resolve, rejected) {
  // 하고 싶은 XHR
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      // 성공함수 자리
      resolve(xhr.responseText);
    } else if (xhr.status === 404) {
      rejected(`${addr} 의 쿼리가 잘못되었습니다. 확인하세요.`);
    } else if (xhr.status === 505) {
      rejected("서버가 오류입니다. 다시 시도해주세요.");
    } else {
      rejected(`알수 없는 오류입니다. ${xhr.status}`);
    }
  };
});
```

## 6. Async/Await

- 너무 좋아요
- 너무 쉬워요
- 단 규칙, 즉 문법을 지킬것

### 6.1. 반드시 다음 처럼 코딩하셔야 합니다.

- 반드시 함수여야 합니다.

```js
function getAllData() {}
```

- 반드시 function 앞에 async 를 붙여줌.

```js
async function getAllData() {}
```

- 반드시 function 안쪽에 try ~ catch 를 작성합니다.

```js
async function getAllData() {
  try {
  } catch (error) {}
}
```

### 6.2. XHR 대신 `fetch` 를 사용합니다.

```js
async function getData(addr, method) {
  const url = `https://jsonplaceholder.typicode.com/${addr}`;
  try {
    const response = await fetch(url, { method });
    if (response.ok) {
      return response.json();
    }
    return null;
  } catch (error) {
    console.log(error);
  }
}
```
