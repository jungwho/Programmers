//  쇠막대기

const solution = (s) => {
  let answer = 0;
  let stack = [];
  let prev = s[0];
  if (prev === "(") stack.push(prev);

  for (let i = 1; i < s.length; i++) {
    let cur = s[i];
    if (cur === "(") {
      stack.push(cur);
    } else {
      stack.pop();
      if (prev === "(") answer += stack.length;
      else answer += 1;
    }
    prev = cur;
  }
  return answer;
};

console.log(solution("()(((()())(())()))(())"));
console.log(solution("(((()(()()))(())()))(()())"));
