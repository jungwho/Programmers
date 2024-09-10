function solution(n, computers) {
  var answer = 0;
  const DFS = (i, l) => {
    l.push(i);
    console.log(i, l);
    for (let k = 0; k < n; k++) {
      if (!l.indexOf(k) && l[i][k] === 1) {
        DFS(k, l);
      }
    }
    answer++;

    return;
  };
  for (let j = 0; j < n; j++) {
    DFS(j, []);
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
