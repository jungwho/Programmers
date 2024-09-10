// 동전교환

const solution = (k, l) => {
  let answer = k;
  const DFS = (n, sum) => {
    if (sum > k) return;
    else if (n > answer) return;
    else if (sum === k) {
      answer = n;
      return;
    } else {
      for (let i of l) {
        DFS(n + 1, sum + i);
      }
    }
  };
  DFS(0, 0);
  return answer;
};

console.log(solution(15, [1, 2, 5]));
