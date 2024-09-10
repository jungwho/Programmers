// 팩토리얼

const solution = (n) => {
  const DFS = (k, sum) => {
    if (k === 0) {
      console.log(sum);
      return;
    }
    sum *= k;
    DFS(k - 1, sum);
  };
  DFS(n, 1);
};

console.log(solution(5));
