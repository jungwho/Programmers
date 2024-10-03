// 계단오르기

const solution = () => {
  let dy = Array(8).fill(0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= 7; i++) {
    dy[i] = dy[i - 1] + dy[i - 2];
  }
  return dy[7];
};

console.log(solution(7));
