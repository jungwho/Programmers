// 최대 점수 구하기

const solution = (l, t) => {
  let answer = Array(t + 1).fill(0);

  l.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  for (let i of l) {
    for (let j = i[1]; j <= t; j++) {
      answer[j] = Math.max(answer[j], answer[j - i[1]] + i[0]);
    }
  }
  return answer[t];
};

console.log(
  solution(
    [
      [10, 5],
      [25, 12],
      [15, 8],
      [6, 3],
      [7, 4],
    ],
    20
  )
);
