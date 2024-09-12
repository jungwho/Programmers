// 조합의 경우수

const solution = (n, r) => {
  let memo = Array.from(Array(n + 1), () => Array(r + 1).fill(0));
  const DFS = (a, b) => {
    if (memo[a][b] > 0) return memo[a][b];
    if (a === b || b === 0) {
      return 1;
    } else {
      return (memo[a][b] = DFS(a - 1, b - 1) + DFS(a - 1, b));
    }
  };
  return DFS(n, r);
};

console.log(solution(5, 3));
console.log(solution(33, 19));
