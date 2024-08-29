function solution(n, works) {
  for (let i = 0; i < n; i++) {
    let max = Math.max(...works);
    let idx = works.indexOf(max);
    if (works[idx] > 0) works.splice(idx, 1, works[idx] - 1);
  }
  console.log(works);
  var answer = 0;
  for (let i in works) {
    let v = i ** 2;
    answer += v;
  }
  return answer;
}

console.log(solution(4, [4, 3, 3]));

function solution(n, works) {
  if (works.reduce((acc, cur) => acc + cur) <= n) return 0;

  works.sort((a, b) => b - a);
  while (n > 0) {
    const max = works[0];
    for (let i = 0; i < works.length; i++) {
      if (works[i] >= max) {
        n--;
        works[i]--;
        if (n === 0) {
          break;
        }
      }
    }
  }

  return works.reduce((acc, cur) => acc + cur ** 2, 0);
}
