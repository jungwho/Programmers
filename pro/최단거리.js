function solution(maps) {
  var answer = 30;
  let dx = [-1, 0, 1, 0];
  let dy = [0, -1, 0, 1];

  const DFS = (x, y, cnt) => {
    if (x === 4 && y === 4) {
      if (cnt < answer) answer = cnt;
      return;
    }
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx > -1 && ny > -1 && nx < 5 && ny < 5) {
        if (maps[nx][ny] === 1) {
          maps[nx][ny] = 0;
          DFS(nx, ny, cnt + 1);
          maps[nx][ny] = 1;
        }
      }
    }
  };
  maps[0][0] = 0;
  DFS(0, 0, 1);

  if (answer === 30) return -1;

  return answer;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);
