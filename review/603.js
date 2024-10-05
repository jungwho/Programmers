// 크레인 인형뽑기

const solution = (board, move) => {
  let answer = 0;
  let stack = [];
  for (let i of move) {
    for (let cur = 0; cur < board.length; cur++) {
      if (board[cur][i - 1] === 0) continue;
      else {
        let ans = board[cur][i - 1];
        board[cur][i - 1] = 0;
        if (stack.length === 0) stack.push(ans);
        else {
          if (stack[stack.length - 1] === ans) {
            answer += 2;
            stack.pop();
          } else stack.push(ans);
        }
        break;
      }
    }
  }

  return answer;
};

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
