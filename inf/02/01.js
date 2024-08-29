// 큰 수 출력하기

// 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램

const solution = (l) => {
  let ans = [];
  ans.push(l[0]);
  for (let i = 1; i < l.length; i++) {
    if (l[i - 1] < l[i]) ans.push(l[i]);
  }
  return ans;
};

console.log(solution([7, 3, 9, 5, 6, 12]));
