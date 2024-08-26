// 대문자 통일

const solution = (s) => {
  let answer = "";
  for (let i of s) {
    answer += i.toUpperCase();
  }
  return answer;
};

console.log(solution("KoreaTimeGood"));
