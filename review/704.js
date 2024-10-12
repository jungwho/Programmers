// 결혼식

const solution = (l) => {
  let answer = 0;
  let map = [];
  for (let [a, b] of l) {
    map.push([a, 1]);
    map.push([b, -1]);
  }
  map.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });
  let now = 0;
  for (let [a, b] of map) {
    now += b;
    if (now > answer) answer = now;
  }

  return answer;
};

console.log(
  solution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);
