// 수들의 조합

const solution = (n, l, k) => {
  let answer = 0;

  const DFS = (arr, cur) => {
    if (arr.length === n) {
      if (arr.reduce((acc, cur) => acc + cur, 0) % k === 0) answer++;
      return;
    }
    for (let i = cur; i < l.length; i++) {
      arr.push(l[i]);
      DFS(arr, i + 1);
      arr.pop();
    }
  };

  DFS([], 0);

  return answer;
};

console.log(solution(2, [2, 4, 5, 8, 12], 6));
