// 교육과정 설계

const solution = (a, b) => {
  let answer = "YES";
  let tar = Array.from(a);
  let all = Array.from(b);

  while (all.length) {
    if (all.shift() === tar[0]) tar.shift();
  }

  if (tar.length !== 0) return "NO";

  return answer;
};

console.log(solution("CBA", "CBDAGE"));
console.log(solution("CBA", "CABDEG"));
