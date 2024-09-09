// 마구간 정하기(결정 알고리즘)

const solution = (n, l) => {
  let answer;
  l.sort((a, b) => a - b);
  let lt = 1;
  let rt = l[l.length - 1] - l[0];
  let mid;

  while (lt <= rt) {
    mid = Math.floor((lt + rt) / 2);
    let cnt = 1;
    let dis = 0;
    for (let i = 1; i < l.length; i++) {
      dis += l[i] - l[i - 1];
      if (dis >= mid) {
        dis = 0;
        cnt++;
        if (cnt === n) {
          break;
        }
      }
    }
    if (cnt >= n) {
      answer = mid;
      lt = mid + 1;
    } else rt = mid - 1;
  }
  return answer;
};

console.log(solution(3, [1, 2, 8, 4, 9]));
