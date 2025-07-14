function getScore(subjcet: string, score: number) {
  return { total: 100, grade: "A" };
}
/**
 * ReturnType 은 함수의 리턴 데이터 종류 추출
 *  {
      total: number;
      grade: string;
  }
 */

type ScoreType = ReturnType<typeof getScore>;
