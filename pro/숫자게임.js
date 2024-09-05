function solution(A, B) {
  var answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  let cur = 0;
  for (let i of A) {
    for (let j = cur; j < B.length; j++) {
      if (i < B[j]) {
        answer++;
        cur = j + 1;
        break;
      }
    }
  }
  return answer;
}
