// 멘토 멘티

const solution = (l) => {
  let answer = [];
  let t = l.length;
  let n = l[0].length;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      if (i === j) continue;
      for (let a = 0; a < t; a++) {
        for (let b = 0; b < n; b++) {
          if (l[a][b] === i) s1 = b;
          if (l[a][b] === j) s2 = b;
        }
        if (s1 < s2) cnt++;
      }
      if (cnt === t) answer.push([i, j]);
    }
  }
  return answer;
};

console.log(
  solution([
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);
