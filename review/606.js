// 공주구하기

const solution = (n, k) => {
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  while (queue.length > 1) {
    for (let i = 0; i < k; i++) {
      let val = queue.shift();
      if (i !== k - 1) queue.push(val);
    }
  }
  return queue[0];
};

console.log(solution(8, 3));
