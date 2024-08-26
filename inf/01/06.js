// 홀수

// 7개의 자연수가 주어질 때, 홀수인 자연수들을 모두 골라 합과 최솟값 출력

const solution = (l) => {
  let ans = [];
  let sum = 0;
  let min = 100;
  for (let i = 0; i < l.length; i++) {
    if (l[i] % 2 === 1) {
      sum += l[i];
      if (l[i] < min) min = l[i];
    }
  }
  ans.push(sum, min);
  return ans;
};

console.log(solution([12, 77, 38, 41, 53, 92, 85]));
