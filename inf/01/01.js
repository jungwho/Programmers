// 세 수 중 최솟값

// 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력

function solution(a, b, c) {
  const l = [a, b, c];
  l.sort((a, b) => a - b);
  return l[0];
}

console.log(solution(2, 5, 11));
