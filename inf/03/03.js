// 숫자만 추출

const solution = (s) => {
  let answer = "";
  for (let i of s) {
    if (!isNaN(i)) answer += i;
  }
  answer = Number(answer);

  return answer;
};

console.log(solution("g0en2T0s8eSoft"));
