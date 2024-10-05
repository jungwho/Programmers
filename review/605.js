// 쇠막대기

const solution = (s) => {
  let answer = 0;
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") cnt++;
    else {
      cnt--;
      if (s[i - 1] === "(") answer += cnt;
      else answer += 1;
    }
  }
  return answer;
};

console.log(solution("()(((()())(())()))(())"));
console.log(solution("(((()(()()))(())()))(()())"));
