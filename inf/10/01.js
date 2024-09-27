// 경로 탐색

const solution = (n, l) => {
  let answer = 0;
  let arr = Array.from(Array(n + 1), (x) => Array(n + 1).fill(0));

  for (let [a, b] of l) {
    arr[a][b] = 1;
  }
  let ck = Array.from(Array(n + 1).fill(0));
  const DFS = (x) => {
    if (x === n) {
      answer++;
    }
    for (let i = 1; i <= n; i++) {
      if (arr[x][i] === 1 && ck[i] === 0) {
        ck[i] = 1;
        DFS(i);
        ck[i] = 0;
      }
    }
  };
  ck[1] = 1;
  DFS(1);
  return answer;
};

console.log(
  solution(5, [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ])
);
