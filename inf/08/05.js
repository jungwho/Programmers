// 합이 같은 부분집합

const solution = (l) => {
  let answer = "NO";
  let tar = l.reduce((acc, cur) => acc + cur, 0) / 2;
  let flag = 0;

  const DFS = (n, sum) => {
    if (flag) return;
    if (n === l.length || sum >= tar) {
      if (sum === tar) {
        answer = "YES";
        flag = 1;
      }
      return;
    }
    DFS(n + 1, sum + l[n]);
    DFS(n + 1, sum);
  };
  DFS(0, 0);

  return answer;
};

console.log(solution([1, 3, 5, 6, 7, 10]));
