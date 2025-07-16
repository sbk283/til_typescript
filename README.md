# TS 심화 - Enum

- 여러개의 상수를 정의해서 사용할 때 유용
- API 요청시 활용을 자주 함.
- 오타를 줄여줌 (협업시 유용)

```ts
/*
 * API 요청을 한다.
 * 4가지 상태가 흔히 활용된다.
 *
 * "DONE" - 요청을 실행 상태
 * "LOADING" - 요청이 진행중인 상태
 * "ERROR" - 요청이 실패 상태
 * "INIT" - 초기 상태
 */

function runNetwork() {
  let status = "INIT";
  try {
    status = "LOADING";
    // 복잡한 처리 ....
    // 복잡한 처리 ....
    status = "DONE";
  } catch (error) {
    status = "ERROR";
  } finally {
    return status;
  }
}

console.log(runNetwork() === "DONE");
```

- 개선 버전

```ts
/*
 * API 요청을 한다.
 * 4가지 상태가 흔히 활용된다.
 *
 * "DONE" - 요청을 실행 상태
 * "LOADING" - 요청이 진행중인 상태
 * "ERROR" - 요청이 실패 상태
 * "INIT" - 초기 상태
 */

const status = {
  DONE: "DONE",
  LOADING: "LOADING",
  ERROR: "ERROR",
  INIT: "INIT",
};

function runNetwork() {
  let status = status.INIT;
  try {
    status = status.LOADING;
    // 복잡한 처리 ....
    // 복잡한 처리 ....
    status = status.DONE;
  } catch (error) {
    status = status.ERROR;
  } finally {
    return status;
  }
}

console.log(runNetwork() === "DONE");
```

- enum 활용

```ts
/*
 * API 요청을 한다.
 * 4가지 상태가 흔히 활용된다.
 *
 * "DONE" - 요청을 실행 상태
 * "LOADING" - 요청이 진행중인 상태
 * "ERROR" - 요청이 실패 상태
 * "INIT" - 초기 상태
 */

export enum Status {
  DONE = "DONE",
  LOADING = "LOADING",
  ERROR = "ERROR",
  INIT = "INIT",
}

function runNetwork() {
  let status = Status.INIT;
  try {
    status = Status.LOADING;
    // 복잡한 처리 ....
    // 복잡한 처리 ....
    status = Status.DONE;
  } catch (error) {
    status = Status.ERROR;
  } finally {
    return status;
  }
}

console.log(runNetwork() === "DONE");
```
