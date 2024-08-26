// 일곱 난쟁이

// 9명 중 키의 합이 100인 7명 구하기

const solution = (l) => {
  const sum = l.reduce((acc, cur) => acc + cur);
  const tar = sum - 100;
  console.log(tar);

  for (let i = 0; i < 8; i++) {
    if (l[i] >= tar) continue;
    else {
      for (let j = i + 1; j < 9; j++) {
        if (l[i] + l[j] === tar) {
          console.log(l[i], l[j]);
          l.splice(j, 1);
          l.splice(i, 1);
          return l;
        }
      }
    }
  }
};

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
