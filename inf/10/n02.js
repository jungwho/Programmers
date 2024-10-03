//

const solution = (A) => {
  let ans = Array(A.length).fill(0);
  for (let i = 1; i < A.length; i++) {
    let cnt = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (A[i] % A[j] === 0) cnt++;
    }
    ans[i] = cnt;
  }
  return ans;
};

console.log(solution([2, 4, 3, 6]));
console.log(solution([7, 8, 7, 8, 8]));
