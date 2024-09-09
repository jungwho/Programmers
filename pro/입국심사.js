function solution(n, times) {
  var answer = 0;
  times.sort((a, b) => a - b);
  let wait_time = times.slice();
  for (let i = 0; i < n; i++) {
    console.log(wait_time);
    let min = Math.min(...wait_time);
    let idx = wait_time.indexOf(min);
    answer = min;
    wait_time[idx] += times[idx];
  }
  return answer;
}

console.log(solution(6, [7, 10]));
