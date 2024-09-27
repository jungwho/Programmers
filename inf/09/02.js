// 경로 탐색

const solution = (n, l) => {
  let answer = 0;
  let arr = Array.from(Array(n + 1), (x) => Array());

  for (let [a, b] of l) {
    arr[a].push(b);
  }
  let ck = Array.from(Array(n + 1).fill(0));
  let path = [];

  const DFS = (x) => {
    if (x === n) {
      answer++;
      console.log(path);
    }
    for (let i of arr[x]) {
      if (ck[i] === 0) {
        ck[i] = 1;
        path.push(i);
        DFS(i);
        ck[i] = 0;
        path.pop(i);
      }
    }
  };

  ck[1] = 1;
  path.push(1);
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
