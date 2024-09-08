// 결혼식 (그리디 알고리즘)

const solution = (l) => {
  let answer = [];
  for (let i of l) {
    answer.push([i[0], +1]);
    answer.push([i[1], -1]);
  }
  answer.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });
  let max = 0;
  let res = 0;
  for (let i of answer) {
    res += i[1];
    if (res > max) max = res;
  }
  return max;
};

console.log(
  solution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);
