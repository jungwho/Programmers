// 괄호 문자 제거

const solution = (s) => {
  let answer = "";
  let stack = [];
  for (let i of s) {
    if (i === "(") stack.push(i);
    else if (i === ")") stack.pop();
    else {
      if (stack.length === 0) answer += i;
    }
  }
  return answer;
};

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
