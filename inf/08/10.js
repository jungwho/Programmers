// 순열 구하기

const solution = (m, l) => {
  const DFS = (ans) => {
    if (ans.length === m) {
      console.log(ans.join(" "));
      return;
    }

    for (let i of l) {
      if (ans.indexOf(i) === -1) {
        ans.push(i);
        DFS(ans);
        ans.pop();
      }
    }
  };
  DFS([]);
};

console.log(solution(2, [3, 6, 9]));
