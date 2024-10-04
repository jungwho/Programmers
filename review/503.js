// 연속 부분수열

const solution = (k, l) => {
  let answer = 0;
  let j = 0;
  let sum = 0;

  for (let i = 0; i < l.length; i++) {
    sum += l[i];
    if (sum >= k) {
      while (true) {
        if (sum < k) break;
        if (sum === k) answer++;
        sum -= l[j++];
      }
    }
  }

  return answer;
};

console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));
