// 올바른 괄호

const solution = (s) => {
  let answer = "YES";
  let stack = [];
  for (let i of s) {
    if (i === "(") stack.push(i);
    else {
      if (stack.length === 0) return "NO";
      else stack.pop();
    }
  }
  if (stack.length !== 0) return "NO";
  return answer;
};

console.log(solution("(()(()))(()"));
console.log(solution("(())(()())"));
