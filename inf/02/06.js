// 격자판 합

const solution = (l) => {
  let answer = [];
  let max = l[0].reduce((acc, cur) => acc + cur, 0);
  for (let i = 1; i < l.length; i++) {
    let sum = l[i].reduce((acc, cur) => acc + cur, 0);
    if (sum > max) max = sum;
  }
  for (let i = 0; i < l.length; i++) {
    let sum = l[0][i];
    for (let j = 1; j < l.length; j++) {
      sum += l[j][i];
    }
    if (sum > max) max = sum;
  }
  let sum01 = 0;
  let sum02 = 0;
  for (let i = 0; i < l.length; i++) {
    sum01 += l[i][i];
    sum02 += l[i][-(i + 1)];
  }
  if (max < sum01) max = sum01;
  if (max < sum02) max = sum02;
  return max;
};

console.log(
  solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
