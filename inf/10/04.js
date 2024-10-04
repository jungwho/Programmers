// 동전교환

const solution = (l, n) => {
  let answer = Array(n + 1).fill(0);
  l.sort((a, b) => a - b);
  for (let i = 1; i <= n; i++) {
    let ans = n;
    for (let j of l) {
      if (i % j === 0) ans = i / j;
      if (i - j > 0) ans = Math.min(ans, answer[i - j] + 1);
    }
    answer[i] = ans;
  }

  return answer[n];
};

console.log(solution([1, 2, 5], 15));
