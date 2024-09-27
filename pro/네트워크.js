function solution(n, computers) {
  var answer = 0;
  let checkList = Array.from({ length: n }, (x) => 0);

  const DFS = (x) => {
    checkList[x] = 1;
    let flag = false;
    for (let i = 0; i < n; i++) {
      if (!checkList[i] && computers[x][i]) {
        flag = true;
        checkList[i] = 1;
        DFS(i);
      }
    }
    if (!flag) {
      answer++;
      return;
    }
  };
  for (let i = 0; i < n; i++) {
    DFS(i);
  }
  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
);

function solution(n, computers) {
  var answer = 0;
  let checkList = Array.from({ length: n }, (x) => 0);
  const DFS = (x) => {
    checkList[x] = 1;
    for (let i = 0; i < n; i++) {
      if (checkList[i] === 0 && computers[x][i] === 1) {
        DFS(i);
      }
    }
  };
  for (let i = 0; i < n; i++) {
    DFS(i);
    answer++;
  }
  return answer;
}
