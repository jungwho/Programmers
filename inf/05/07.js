// 아나그램

const solution = (a, b) => {
  let answer = "YES";
  let map = new Map();
  for (let i of a) {
    if (map.has(i)) map.set(i, map.get(i) + 1);
    else map.set(i, 1);
  }
  for (let i of b) {
    if (!map.has(i)) return "NO";
    map.set(i, map.get(i) - 1);
  }
  for (let [k, v] of map) {
    if (v) return "NO";
  }
  return answer;
};

console.log(solution("AbaAeCe", "baeeACA"));
console.log(solution("abaCC", "Caaab"));
