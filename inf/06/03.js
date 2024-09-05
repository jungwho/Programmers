// 크레인 인형뽑기

const solution = (board, move) => {
  let answer = 0;
  let stack = [];
  for (let i of move) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][i - 1] === 0) {
        continue;
      }
      let val = board[j][i - 1];
      board[j][i - 1] = 0;
      if (stack[stack.length - 1] === val) {
        stack.pop();
        answer += 2;
      } else stack.push(val);
      break;
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
