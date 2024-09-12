// 수열 추측하기

const solution = (n, k) => {
  const plusList = (l) => {
    if (l.length === 1) return l[0];
    else {
      let ll = [];
      for (let i = 0; i < l.length - 1; i++) {
        ll.push(l[i] + l[i + 1]);
      }
      return plusList(ll);
    }
  };
  let flag = 0;
  const DFS = (l) => {
    if (flag) return;
    if (l.length === n) {
      if (plusList(l) === k) {
        console.log(l);
        flag = 1;
      }
      return;
    }
    for (let i = 1; i <= n; i++) {
      if (l.indexOf(i) === -1) {
        l.push(i);
        DFS(l);
        l.pop();
      }
    }
  };
  DFS([]);
};

console.log(solution(4, 16));
