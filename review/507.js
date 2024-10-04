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
    else if (map.get(i) === 0) return "NO";
    else map.set(i, map.get(i) - 1);
  }

  return answer;
};

console.log(solution("AbaAeCe", "baeeACA"));
console.log(solution("abaCC", "Caaab"));
