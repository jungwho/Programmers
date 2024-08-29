// K번째 큰수

const solution = (n, k, l) => {
  let answer = [];
  for (let a = 0; a < n - 2; a++) {
    for (let b = a + 1; b < n - 1; b++) {
      for (let c = b + 1; c < n; c++) {
        answer.push(l[a] + l[b] + l[c]);
      }
    }
  }
  answer.sort((a, b) => b - a);
  return answer[k - 1];
};

console.log(solution(10, 3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));
