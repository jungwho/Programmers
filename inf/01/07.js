// 10부제

// 날짜와 차량의 끝 숫자가 일치하는 날 운행X

const solution = (n, l) => {
  let answer = 0;
  for (var i of l) {
    if (i % 10 === n) answer++;
  }
  return answer;
};

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30]));
