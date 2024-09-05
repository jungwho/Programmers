// 최대 매출

const solution = (k, l) => {
  let p2 = k;
  let max = 0;
  for (let p1 = 0; p1 < l.length - k; p1++) {
    if (l[p1] < l[p2]) {
      sum = l.slice(p2 - k + 1, p2 + 1).reduce((acc, cur) => acc + cur, 0);
      if (sum > max) max = sum;
    }
    p1++;
    p2++;
  }
  return max;
};

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
