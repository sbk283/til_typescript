class NumberPagination<T> {
  // 필수속성
  data: T[] = [];
  message?: string;
  lastFetchAt?: Date;
}

const a = new NumberPagination();
