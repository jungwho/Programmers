// 후위식 연산

const solution = (s) => {
  let stack = [];
  for (let i of s) {
    if (!isNaN(i)) stack.push(i);
    else {
      let b = Number(stack.pop());
      let a = Number(stack.pop());
      if (i === "+") val = a + b;
      if (i === "-") val = a - b;
      if (i === "*") val = a * b;
      if (i === "/") val = a / b;
      stack.push(val);
    }
  }
  return stack.pop();
};

console.log(solution("352+*9-"));
