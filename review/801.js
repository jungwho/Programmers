// 재귀함수

const solution = (n) => {
  let answer = [];
  const DFS = (n) => {
    if (n === 0) return;
    answer.push(n);
    DFS(n - 1);
  };
  DFS(n);
  return answer;
};

console.log(solution(3));
console.log(solution(7));
