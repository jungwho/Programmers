// 모든 아나그램 찾기

const solution = (s, t) => {
  let answer = 0;
  let k = t.length;
  let map = new Map();

  const compareMap = (map) => {
    let m = new Map(map);
    if (m.size !== t.length) return false;
    for (let i of t) {
      if (!m.has(i) || m.get(i) === 0) return false;
      else m.set(i, m.get(i) - 1);
    }
    return true;
  };
  for (let i = 0; i < k; i++) {
    if (map.has(s[i])) map.set(s[i], map.get(i) + 1);
    else map.set(s[i], 1);
  }
  if (compareMap(map)) answer++;

  for (let i = k; i < s.length; i++) {
    map.set(s[i - k], map.get(s[i - k]) - 1);
    if (map.get(s[i - k]) === 0) map.delete(s[i - k]);
    if (map.has(s[i])) map.set(s[i], map.get(s[i]) + 1);
    else map.set(s[i], 1);
    if (compareMap(map)) answer++;
  }
  return answer;
};

console.log(solution("bacaAacba", "abc"));
