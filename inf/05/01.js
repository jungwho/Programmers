// 두 배열 합치기(Two Pointers Algorithm)

const solution = (a, b) => {
  let answer = [];
  let n = a.length;
  let m = b.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    if (a[p1] <= b[p2]) answer.push(a[p1++]); // p1넣고 p1++
    else answer.push(b[p2++]); // p2 넣고 p2 ++
  }
  while (p1 < n) answer.push(a[p1++]);
  while (p2 < m) answer.push(b[p2++]);
  return answer.join(" ");
};

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));
