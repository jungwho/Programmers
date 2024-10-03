function solution(s) {
  let l = s.split(" ");
  let ll = [];
  for (let i of l) {
    ll.push(Number(i));
  }
  let lll = [];
  lll.push(Math.min(...ll));
  lll.push(Math.max(...ll));
  return lll.join(" ");
}

console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -4"));
