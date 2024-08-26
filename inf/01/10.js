const solution = (s, v) => {
  let answer = 0;
  for (let i of s) {
    if (i === v) answer++;
  }

  return answer;
};

console.log(solution("COMPUTERPROGRAMMING", "R"));
