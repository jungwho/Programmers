// 교육과정설계

const solution = (t, l) => {
  let answer = "YES";
  let queue = t.split("");
  for (let i of l) {
    if (queue.indexOf(i) === -1) continue;
    else if (i !== queue[0]) return "NO";
    else queue.shift();
  }
  if (queue.length !== 0) return "NO";
  return answer;
};

console.log(solution("CBA", "CBDAGE"));
console.log(solution("CBA", "ACBDAGE"));
console.log(solution("CBA", "CABDAGE"));
