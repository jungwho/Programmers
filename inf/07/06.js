// 정렬 오류 찾기

const solution = (l) => {
  let answer = [];
  let ll = l.slice();
  ll.sort((a, b) => a - b);
  for (let i = 0; i < l.length; i++) {
    if (l[i] !== ll[i]) answer.push(i + 1);
  }

  return answer;
};

console.log(solution([120, 125, 152, 130, 135, 135, 143, 127, 160]));
console.log(solution([120, 130, 150, 150, 130, 150]));
