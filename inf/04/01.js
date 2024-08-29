// 자릿수의 합(최대값)
const sumFnc = (n) => {
  let s = String(n);
  let sum = 0;
  for (let i of s) {
    sum += Number(i);
  }
  return sum;
};

const solution = (l) => {
  let answer = l[0];
  for (let i = 1; i < l.length; i++) {
    if (sumFnc(l[i]) > sumFnc(answer)) answer = l[i];
    else if (sumFnc(l[i]) === sumFnc(answer) && l[i] > answer) answer = l[i];
  }
  return answer;
};

const solution2 = (l) => {
  let ans,
    max = 0;
  for (let i of l) {
    let sum = 0;
    let n = i;
    while (n) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    if (sum > max) {
      max = sum;
      ans = i;
    }
    if (sum === max && i > ans) ans = i;
  }
  return ans;
};

console.log(solution([128, 460, 603, 40, 521, 137, 123]));
console.log(solution2([128, 460, 603, 40, 521, 137, 123]));
