// 연속 부분수열2

const solution = (k, l) => {
  let answer = 0;
  for (let i = 0; i < l.length; i++) {
    let sum = 0;
    for (let j = i; j >= 0; j--) {
      sum += l[j];
      if (sum > k) break;
      answer++;
    }
  }
  return answer;
};

console.log(solution(5, [1, 3, 1, 2, 3]));
