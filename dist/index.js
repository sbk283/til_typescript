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
  xhr.open(url, method);
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      callback(xhr.responseText);
    } else if (xhr.status === 404) {
      console.log("주소 및 쿼리 확인하세요.");
    } else if (xhr.status === 505) {
      console.log("서버가 전원이 꺼졌습니다. 다시 시도해주세요.");
    }
  };
}
