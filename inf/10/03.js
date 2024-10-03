// 최대 부분 증가수열
// dy[x] x가 마지막 항일 때 몇개인지!

const solution = (l) => {
  let dy = Array(l.length).fill(0);
  dy[0] = 1;
  for (let i = 1; i < l.length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (l[i] > l[j]) {
        if (max < dy[j]) max = dy[j];
      }
    }
    dy[i] = max + 1;
  }

  return Math.max(...dy);
};

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]));
