// 졸업선물

const solution = (n, p, l) => {
  let answer = [];
  l.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < n; i++) {
    l[i][0] /= 2;
    let tar = p - l[i][0] - l[i][1];
    let cnt = 0;
    if (tar < 0) continue;
    else cnt++;
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      tar = tar - l[j][0] - l[j][1];
      if (tar < 0) break;
      else cnt++;
    }
    answer.push(cnt);
    l[i][0] *= 2;
  }
  return Math.max(...answer);
};

console.log(
  solution(5, 28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
);
console.log(
  solution(5, 41, [
    [8, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [12, 1],
  ])
);
console.log(
  solution(5, 41, [
    [8, 6],
    [2, 2],
    [12, 1],
    [4, 5],
    [4, 3],
  ])
);

console.log(
  solution(4, 33, [
    [2, 12],
    [8, 4],
    [6, 6],
    [6, 7],
  ])
);
