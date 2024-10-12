// 재귀함수와 이진수

const solution = (n) => {
  let answer = [];
  const DFS = (x) => {
    if (x === 1) {
      answer.push(x);
      return;
    }
    DFS(Math.floor(x / 2));
    answer.push(x % 2);
  };
  DFS(n);
  return answer;
};

console.log(solution(11));
