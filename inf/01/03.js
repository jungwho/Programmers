// 연필 개수

// 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 n명에게 필요한 연필의 다스 수

const solution = (n) => {
  let ans;
  ans = Math.ceil(n / 12);
  return ans;
};

console.log(solution(178));
