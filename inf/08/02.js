// 이진수 출력

const solution = (n) => {
  let answer = [];
  const DFS = (n) => {
    if (n === 0) return;
    DFS(Math.floor(n / 2));
    let ans = n % 2;
    answer.push(ans);
  };
  DFS(n);
  return answer;
};

console.log(solution(11));
console.log(solution(32));
