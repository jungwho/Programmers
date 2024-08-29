// 문자열 압축

const solution = (s) => {
  let answer = s[0];
  let v = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === s[i]) v++;
    else {
      if (v !== 1) answer += v;
      answer += s[i];
      v = 1;
    }
  }
  return answer;
};

console.log(solution("KKHSSSSSSSE"));
