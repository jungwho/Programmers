// 최솟값 구하기
// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

const solution = (s) => {
  let l = s.split(" ");
  l.sort((a, b) => a - b);
  return l[0];
};

console.log(solution("5 3 7 11 2 15 17"));
