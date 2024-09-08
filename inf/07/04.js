// 삽입 정렬

// tmp에 하나씩 삽입, tmp자리 찾기(크면 뒤로 밀고, 작은 것 바로 뒤에 위치)

const solution = (l) => {
  for (let i = 1; i < l.length; i++) {
    let tmp = l[i];
    let j;
    for (j = i - 1; j > -1; j--) {
      if (l[j] > tmp) l[j + 1] = l[j];
      else break;
    }
    console.log(j);
    l[j + 1] = tmp;
  }
  return l;
};

console.log(solution([11, 7, 5, 6, 10, 9]));
