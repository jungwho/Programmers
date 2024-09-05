// 연속 부분수열의 합2

const solution = (k, l) => {
  let answer = 0;
  let p1 = (p2 = 0);
  let res = 0;
  for (let p2 = 0; p2 < l.length; p2++) {
    res += l[p2];
    while (res > k) {
      res -= l[p1++];
    }
    answer += p2 - p1 + 1;
  }
  return answer;
};

console.log(solution(5, [1, 3, 1, 2, 3]));
