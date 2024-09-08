// LRU(Least Recently Used)알고리즘

const solution = (n, l) => {
  let answer = Array.from({ length: n }, (x) => (x = 0));
  for (let i of l) {
    let idx = answer.indexOf(i);
    if (idx === -1) {
      answer.pop();
    } else {
      answer.splice(idx, 1);
    }
    answer.splice(0, 0, i);
  }
  return answer;
};

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
console.log(solution(5, [1, 2, 3, 2, 2]));
