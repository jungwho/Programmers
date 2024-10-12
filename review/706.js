// 뮤직비디오

const solution = (k, l) => {
  let lt = 0;
  let rt = l.reduce((acc, cur) => acc + cur, 1);
  let mid;
  let sum;
  let cnt;
  while (lt < rt) {
    mid = Math.floor((lt + rt) / 2);
    sum = 0;
    cnt = 1;
    for (let i of l) {
      sum += i;
      if (sum > mid) {
        cnt++;
        sum = i;
      }
    }
    if (cnt === k) rt = mid - 1;
    else if (cnt < k) rt = mid - 1;
    else lt = mid + 1;
  }
  return mid;
};

console.log(solution(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
