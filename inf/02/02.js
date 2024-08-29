// 보이는 학생

// 앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다

const solution = (l) => {
  let ans = 1;
  let tar = l[0];
  for (let i = 1; i < l.length; i++) {
    if (tar < l[i]) {
      ans++;
      tar = l[i];
    }
  }
  return ans;
};

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
