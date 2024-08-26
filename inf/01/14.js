// 가장 긴 문자열

const solution = (n, l) => {
  let answer = l[0].length;
  for (let i of l) {
    if (answer < i.length) answer = i;
  }
  return answer;
};

console.log(solution(5, ["teacher", "time", "student", "beautiful"]));
