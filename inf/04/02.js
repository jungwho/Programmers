// 뒤집은 소수

const solution = (l) => {
  let answer = [];
  for (let i = 0; i < l.length; i++) {
    let s = String(l[i]);
    let n = s.split("").reverse().join("");
    n = Number(n);
    if (n === 2 || n === 3) {
      answer.push(n);
    } else if (n % 2 === 0 || n % 3 === 0) continue;
    else {
      let t = 5;
      while (t < n) {
        if (n % t === 0) {
          break;
        } else {
          t += 2;
          if (n === t) {
            answer.push(n);
            break;
          }
        }
      }
    }
  }
  return answer;
};

const isPrime = (n) => {
  if (n === 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const solution2 = (l) => {
  let answer = [];
  for (let i of l) {
    let res = 0;
    while (i) {
      let v = i % 10;
      res = 10 * res + v;
      i = Math.floor(i / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  return answer;
};
console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
console.log(solution2([32, 55, 62, 20, 250, 370, 200, 30, 100]));
