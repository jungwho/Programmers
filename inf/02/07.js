// 봉우리 개수

const solution = (l) => {
  let answer = 0;

  const n = l.length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let cur = l[i][j];
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (nx > -1 && nx < n) {
          if (ny > -1 && ny < n) {
            if (cur < l[nx][ny]) {
              flag = 0;
              break;
            }
          }
        }
      }
      if (flag) answer++;
    }
  }
  return answer;
};

console.log(
  solution([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);
