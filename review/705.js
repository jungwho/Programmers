// 이분검색

const solution = (k, l) => {
  let lt = 0;
  let rt = l.length - 1;
  let mid;
  l.sort((a, b) => a - b);
  while (true) {
    mid = Math.floor((lt + rt) / 2);
    if (l[mid] === k) break;
    else if (l[mid] > k) rt = mid - 1;
    else lt = mid + 1;
  }
  return mid + 1;
};

console.log(solution(32, [23, 87, 65, 12, 57, 32, 99, 81]));
