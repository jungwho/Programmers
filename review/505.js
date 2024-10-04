// 최대 매출

const solution = (k, l) => {
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += l[i];
  }
  for (let i = k; i < l.length; i++) {
    sum += l[i] - l[i - k];
    if (sum > answer) answer = sum;
  }
  return answer;
};

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
