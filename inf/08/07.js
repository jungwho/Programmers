// 최대점수 구하기

const solution = (m, l) => {
  let answer = 0;
  const DFS = (n, score, time) => {
    if (time > m) return;
    else if (n === l.length) {
      if (score > answer) answer = score;
      return;
    } else {
      DFS(n + 1, score + l[n][0], time + l[n][1]);
      DFS(n + 1, score, time);
    }
  };
  DFS(0, 0, 0);
  return answer;
};

console.log(
  solution(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);
