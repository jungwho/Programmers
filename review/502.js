// 공통원소 구하기

const solution = (a, b) => {
  let answer = [];
  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);
  let i = (j = 0);
  while (true) {
    if (i === a.length || j === b.length) break;
    if (a[i] === b[j]) {
      answer.push(a[i]);
      i++;
      j++;
    } else if (a[i] < b[j]) i++;
    else j++;
  }
  return answer.join(" ");
};

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
