// 바뀐 키순서

const solution = (l) => {
  let answer = [];
  let sortL = l.slice();
  sortL.sort((a, b) => a - b);
  for (let i = 0; i < l.length; i++) {
    if (l[i] !== sortL[i]) answer.push(i + 1);
  }
  return answer.join(" ");
};

console.log(solution([120, 125, 152, 130, 135, 135, 143, 127, 160]));
