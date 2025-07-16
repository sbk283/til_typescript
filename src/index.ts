type IdolType = {
  readonly name: string; // 읽기 전용
  age?: number; // 옵셔널
  year: number;
};

let bts: IdolType = {
  name: "BTS",
  year: 2013,
};

//bts.name = "방탄소년단"; // 이름 변경 불가능
bts.year = 2014; // 연도 변경 가능
