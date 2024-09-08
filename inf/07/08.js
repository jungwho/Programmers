// 회의실 배정(그리디 알고리즘)

const solution = (l) => {
  let answer = 0;
  l.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let end = 0;
  for (let i of l) {
    if (i[0] >= end) {
      answer++;
      end = i[1];
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
console.log(
  solution([
    [3, 3],
    [1, 3],
    [2, 3],
  ])
);
