// 조합 구하기

const solution = (n, m) => {
  const DFS = (l) => {
    if (l.length === m) {
      console.log(l);
      return;
    }
    let cur = 1;
    if (l.length !== 0) cur = l[l.length - 1];

    for (let i = cur; i <= n; i++) {
      if (l.indexOf(i) === -1) {
        l.push(i);
        DFS(l);
        l.pop();
      }
    }
  };
  DFS([]);
};

console.log(solution(4, 2));
