//회문 문자열2

const solution = (s) => {
  let answer = "YES";
  let ss = s.toLowerCase().replace(/[^a-z]/g, "");
  let n = Math.floor(ss.length / 2);
  console.log(ss, n);
  for (let i = 0; i < n; i++) {
    if (ss[i] !== ss[ss.length - (1 + i)]) return "NO";
  }
  return answer;
};

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));
console.log(solution("hi s s ss ih"));
console.log(solution("hi s s sas ih"));
