// 대문자 <-> 소문자

const solution = (s) => {
  let answer = "";
  for (let i of s) {
    if (i === i.toUpperCase()) answer += i.toLowerCase();
    else answer += i.toUpperCase();
  }
  return answer;
};

console.log(solution("KoreaTimeGood"));
