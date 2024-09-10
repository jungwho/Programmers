// 중복순열 구하기

const solution = (n, m) => {
  const DFS = (l) => {
    if (l.length === m) {
      console.log(l.join(" "));
      return;
    }
    for (let i = 1; i < n + 1; i++) {
      l.push(i);
      DFS(l);
      l.pop();
    }
  };
  DFS([]);
};

console.log(solution(5, 3));
