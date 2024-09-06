// 선택 정렬

// 제일 작은 것을 찾아 제일 앞에 두기

const solution = (l) => {
  for (let i = 0; i < l.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < l.length; j++) {
      if (l[min] > l[j]) min = j;
    }
    [l[i], l[min]] = [l[min], l[i]];
  }

  return l;
};

console.log(solution([13, 5, 11, 7, 23, 15]));
