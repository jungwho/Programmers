function solution(number, k) {
  var answer = "";
  let num = Array.from({ length: number.length }, (x, i) => {
    x = Number(number[i]);
  });
  return num;
}

console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));
