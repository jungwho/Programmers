// 두 배열의 공통 원소 찾기(Two Pointers Algorithm)

const solution = (a, b) => {
  let answer = [];
  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);
  let n = a.length;
  let m = b.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    if (a[p1] === b[p2]) {
      answer.push(a[p1++]);
      p2++;
    } else if (a[p1] < b[p2]) p1++;
    else p2++;
  }
  return answer;
};

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
