// 재귀함수

const solution = (n) => {
  let answer = [];
  const dfs = (n) => {
    if (n === 0) return;
    dfs(n - 1);
    answer.push(n);
  };
  dfs(n);

  return answer;
};

console.log(solution(3));
