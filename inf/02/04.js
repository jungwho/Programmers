// OX문제 with 가산점

const solution = (l) => {
  let answer = 0;
  let plus = 1;
  for (let i = 0; i < l.length; i++) {
    if (l[i] === 1) {
      answer += plus;
      plus++;
    } else {
      plus = 1;
    }
  }
  return answer;
};

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
