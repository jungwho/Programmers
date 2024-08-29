// 회문 문자열

const solution = (s) => {
  let answer = "YES";
  let n = Math.floor(s.length / 2);

  for (let i = 0; i < n; i++) {
    let a = s[i].toUpperCase();
    let b = s[s.length - (1 + i)].toUpperCase();
    if (a !== b) return "NO";
  }
  return answer;
};

console.log(solution("gooG"));
console.log(solution("Wesow"));
