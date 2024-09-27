//섬나라 아일랜드

const solution = (l) => {
  let answer = 0;
  let dx = [-1, 0, 1, 0, 1, 1, -1, -1];
  let dy = [0, -1, 0, 1, -1, 1, -1, 1];

  const islandDelete = (x, y) => {
    let q = [];
    q.push([x, y]);
    l[x][y] = -1;
    while (q.length) {
      let [vx, vy] = q.shift();
      for (let i = 0; i < 8; i++) {
        let nx = vx + dx[i];
        let ny = vy + dy[i];
        if (nx >= 0 && ny >= 0 && nx < 7 && ny < 7 && l[nx][ny] === 1) {
          l[nx][ny] = -1;
          q.push([nx, ny]);
        }
      }
    }
  };

  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
      if (l[i][j] === 1) {
        answer++;
        islandDelete(i, j);
      }
    }
  }

  return answer;
};

console.log(
  solution([
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
  ])
);
