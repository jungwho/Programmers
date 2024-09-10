// 바둑이 승차

const solution = (k, l) => {
  let answer = 0;

  const DFS = (n, sum) => {
    if (sum > k) return;
    else if (n === l.length) {
      if (answer < sum) {
        answer = sum;
        return;
      }
    } else {
      DFS(n + 1, sum + l[n]);
      DFS(n + 1, sum);
    }
  };
  DFS(0, 0);

  return answer;
};

console.log(solution(259, [81, 58, 42, 33, 61]));
