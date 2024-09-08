function solution(n, w, l) {
  var answer = 0;
  let queue = [];
  let cur = 0;
  while (cur < l.length) {
    if (queue.length === n) {
      queue.pop();
    }
    let sum = queue.reduce((a, b) => a + b, 0);
    if (l[cur] + sum <= w) {
      queue.unshift(l[cur]);
      cur++;
    } else {
      queue.unshift(0);
    }
    answer++;
  }
  answer += n;
  return answer;
}
