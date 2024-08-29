// 등수 구하기
const solution = (l) => {
  let answer = Array.from({ length: l.length }, (x) => 1);

  for (let i = 0; i < l.length; i++) {
    for (let j of l) {
      if (l[i] < j) answer[i]++;
    }
  }
  return answer;
};

console.log(solution([87, 92, 92, 100, 76]));
