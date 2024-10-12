// 회의실 배정

const solution = (l) => {
  let answer = 0;
  l.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let ed = 0;
  for (let [a, b] of l) {
    if (a >= ed) {
      answer++;
      ed = b;
    }
  }
  return answer;
};

console.log(
  solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);
