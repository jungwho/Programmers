// 연속 부분수열의 합

const solution = (k, l) => {
  let answer = 0;
  let p1 = (p2 = 0);
  let res = 0;
  while (p2 < l.length) {
    res += l[p2++];
    if (res >= k) {
      while (res >= k) {
        if (res === k) {
          answer++;
        }
        res -= l[p1++];
      }
    }
  }
  return answer;
};
console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));
