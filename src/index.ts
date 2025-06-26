type MemberType = {
  userName: string;
  age: number;
  group: string;
};
const member: MemberType = { userName: "뷔", age: 30, group: "BTS" };
// const { userName, age, group } = member;

// 사용하지 않은 나머지 속성 만 모으는 연산자
const { ...rest }: MemberType = member;
console.log(rest);

const { userName, ...who }: MemberType = member;
console.log(userName);
console.log(who);