// 중복 단어 제거

const solution = (l) => {
  let ans = [];
  for (let i = 0; i < l.length; i++) {
    if (i === l.indexOf(l[i])) ans.push(l[i]);
  }
  return ans;
};

console.log(solution(["good", "time", "good", "time", "student"]));
