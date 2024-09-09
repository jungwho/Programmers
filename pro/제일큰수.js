function solution(number, k) {
  var answer = [];
  let num = Array.from({ length: number.length }, (x, i) => {
    return Number(number[i]);
  });

  let cur = -1;
  k = num.length - k;

  while (k > 0) {
    let max = Math.max(...num.slice(cur + 1, num.length - k + 1));
    cur = num.indexOf(max, cur + 1);
    answer.push(max);
    k--;
  }
  return answer.join("").toString();
}

console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));
