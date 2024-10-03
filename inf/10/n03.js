//

const solution = (U, L, C) => {
  let ansU = Array(C.length).fill(0);
  let ansL = Array(C.length).fill(0);
  if (U + L !== C.reduce((acc, cur) => acc + cur, 0)) return "IMPOSSIBLE";

  let cntU = 0;
  for (let i = 0; i < C.length; i++) {
    if (cntU === U) break;
    if (C[i] > 0) {
      ansU[i] = 1;
      C[i]--;
      cntU++;
    }
  }

  let cntL = 0;
  for (let i = 0; i < C.length; i++) {
    if (cntL === U) break;
    if (C[i] > 0) {
      ansL[i] = 1;
      C[i]--;
      cntL++;
    }
  }

  return `${ansU.join("")}, ${ansL.join("")}`;
};

console.log(solution(3, 2, [2, 1, 1, 0, 1]));
console.log(solution(2, 3, [0, 0, 1, 1, 2]));
console.log(solution(2, 2, [2, 0, 2, 0]));
