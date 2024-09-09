// 뮤직비디오(결정알고리즘)

const solution = (k, l) => {
  let lt = l[0];
  let rt = l.reduce((acc, cur) => acc + cur, 1);
  let mid;
  let answer;
  while (lt <= rt) {
    mid = Math.floor((rt + lt) / 2);
    let sum = 0;
    let cnt = 1;
    for (let i of l) {
      sum += i;
      if (sum > mid) {
        sum = i;
        cnt++;
      }
    }
    if (cnt <= k) {
      answer = mid;
      rt = mid - 1;
    } else lt = mid + 1;
  }

  return answer;
};

console.log(solution(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
