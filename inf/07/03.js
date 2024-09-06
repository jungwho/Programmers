// 버블 정렬(음수 VS 양수)

const solution = (l) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return l;
};

console.log(solution([1, 2, 3, -3, -2, 5, 6, -6]));
