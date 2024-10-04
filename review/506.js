// 학급 회장

const solution = (s) => {
  let answer = "";
  let map = new Map();
  for (let i of s) {
    if (map.has(i)) map.set(i, map.get(i) + 1);
    else map.set(i, 1);
  }
  let max = 0;
  for (let [k, v] of map) {
    if (v > max) {
      max = v;
      answer = k;
    }
  }
  return answer;
};

console.log(solution("BACBACCACCBDEDE"));
