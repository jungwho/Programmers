// 가운데 문자 출력

const solution = (s) => {
  let ans = Math.floor(s.length / 2);
  if (s.length % 2 !== 0) return s[ans];
  else return s.slice(ans - 1, ans + 1);
};

console.log(solution("study"));
console.log(solution("good"));
