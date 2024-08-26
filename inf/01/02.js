// 삼각형 판별하기

// 서로 다른 A, B, C 세 개의 막대 길이가 주어짐 -> 삼각형 가능한지 판별

const solution = (a, b, c) => {
  const l = [a, b, c];
  l.sort((a, b) => a - b);
  if (l[0] + l[1] > l[2]) return "YES";
  return "NO";
};

console.log(solution(13, 33, 17));
