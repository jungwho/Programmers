// 버블 정렬

// 제일 큰 것 제일 뒤로 보내기

const solution = (l) => {
  for (let i = 0; i < l.length - 1; i++) {
    for (let j = 0; j < l.length - 1 - i; j++) {
      if (l[j] > l[j + 1]) [l[j], l[j + 1]] = [l[j + 1], l[j]];
    }
  }
  return l;
};

console.log(solution([13, 5, 11, 7, 23, 15]));
