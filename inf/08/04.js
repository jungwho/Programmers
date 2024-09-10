// 부분집합 구하기

const solution = (n) => {
  let answer = [];
  const DFS = (lv) => {
    if (lv === n + 1) {
      console.log(answer);
      return;
    }
    answer.push(lv);
    DFS(lv + 1);
    answer.pop();
    DFS(lv + 1);
  };
  DFS(1);
};

solution(3);
