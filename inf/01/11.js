// 대문자 찾기

const solution = (s) => {
  let answer = 0;
  for (let i of s) {
    if (i === i.toUpperCase()) answer++;
  }
  return answer;
};

console.log(solution("KoreaTimeGood"));
