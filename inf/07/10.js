// 이분 검색

const solution = (k, l) => {
  let answer = 0;
  l.sort((a, b) => a - b);
  let lt = 0;
  let rt = l.length - 1;
  let mid;
  while (lt <= rt) {
    mid = Math.floor((lt + rt) / 2);
    if (l[mid] === k) return mid + 1;
    else if (k < l[mid]) rt = mid - 1;
    else lt = mid + 1;
  }
  return mid + 1;
};

console.log(solution(32, [23, 87, 65, 12, 57, 32, 99, 81]));
