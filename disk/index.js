class 클래스명 {
    // 작성안해도 기본적으로 작동된다.
    constructor() {
    }
}
const 인스턴스 = new 클래스명();
class Robot {
    // 메소드 축약형
    constructor() {
        console.log("안녕");
    }
}
const ins = new Robot();
console.log(ins);
export {};
