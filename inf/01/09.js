// A를 #으로

// 문자열에서 A를 #으로 바꾸기

const solution = (s) => {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") answer += "#";
    else answer += s[i];
  }

  return answer;
};

console.log(solution("BANANA"));
