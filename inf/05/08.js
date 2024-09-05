// 모든 아나그램

const compareMap = (a, b) => {
  if (a.size !== b.size) return false;
  for (let [key, value] of a) {
    if (!b.has(key) || b.get(key) !== value) return false;
  }
  return true;
};

const solution = (a, b) => {
  let answer = 0;
  let aMap = new Map();
  let bMap = new Map();

  for (let i of b) {
    if (bMap.has(i)) bMap.set(i, bMap.get(i) + 1);
    else bMap.set(i, 1);
  }

  for (let i = 0; i < b.length - 1; i++) {
    if (aMap.has(a[i])) aMap.set(a[i], aMap.get(a[i]) + 1);
    else aMap.set(a[i], 1);
  }

  let p1 = 0;
  let p2 = b.length - 1;

  while (p2 < a.length) {
    //p2를 aMap에 추가하기
    if (aMap.has(a[p2])) aMap.set(a[p2], aMap.get(a[p2]) + 1);
    else aMap.set(a[p2], 1);

    // aMap과 bMap 비교하기
    if (compareMap(aMap, bMap)) {
      answer++;
    }

    aMap.set(a[p1], aMap.get(a[p1]) - 1);
    if (aMap.get(a[p1]) === 0) aMap.delete(a[p1]);
    p1++;
    p2++;
  }
  return answer;
};

console.log(solution("bacaAacba", "abc"));
console.log(solution("ababcab", "ab"));
