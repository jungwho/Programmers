const solution = (a, b) => {
  let answer = [];
  let i = (j = 0);
  while (true) {
    if (i === a.length || j === b.length) break;
    if (a[i] < b[j]) {
      answer.push(a[i]);
      i++;
    } else {
      answer.push(b[j]);
      j++;
    }
  }
  while (i < a.length) {
    answer.push(a[i]);
    i++;
  }

  while (j < b.length) {
    answer.push(b[j]);
    j++;
  }
  return answer.join(" ");
};

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));
