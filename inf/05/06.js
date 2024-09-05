// Hash Map (득표수)

const solution = (s) => {
  let map = new Map();
  for (let i of s) {
    if (map.has(i)) map.set(i, map.get(i) + 1);
    else map.set(i, 1);
  }
  let max = 0;
  let ans = "";
  for (let [k, v] of map) {
    if (v > max) {
      max = v;
      ans = k;
    }
  }
  return ans;
};

console.log(solution("BACBACCACCBDEDE"));
