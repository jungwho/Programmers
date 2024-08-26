// 중복되는 수

const solution = (s) => {
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (i === s.indexOf(s[i])) ans += s[i];
  }
  return ans;
};

console.log(solution("ksekkset"));
console.log(solution("good"));
