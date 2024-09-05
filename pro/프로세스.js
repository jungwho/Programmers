function solution(progresses, speeds) {
  var answer = [];
  while (progresses.length) {
    let plus = 100 - progresses.shift();
    let day = Math.ceil(plus / speeds.shift());
    let ans = 1;
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i] * day;
    }
    while (progresses.length) {
      if (progresses[0] >= 100) {
        progresses.shift();
        speeds.shift();
        ans++;
      } else break;
    }
    answer.push(ans);
  }
  return answer;
}
