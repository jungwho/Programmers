// 가장 짧은 문자거리

const solution = (s, t) => {
  const n = s.length;
  let l = Array.from({ length: n }, (x) => 0);

  for (let i = 0; i < n; i++) {
    if (s[i] === t) {
      l[i] = 0;
      continue;
    }
    let cnt = 1;
    while (cnt < n) {
      if (i - cnt > 0 && s[i - cnt] === t) {
        l[i] = cnt;
        break;
      } else if (i + cnt < n && s[i + cnt] === t) {
        l[i] = cnt;
        break;
      } else cnt++;
    }
  }

  return l;
};

const solution2 = (s, t) => {
  let answer = [];
  let v = 1000;
  for (let i of s) {
    if (i === t) {
      v = 0;
    } else v++;
    answer.push(v);
  }
  let v2 = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      v2 = 0;
    } else v2++;

    if (answer[i] > v2) {
      answer[i] = v2;
    }
  }
  return answer;
};
console.log(solution("teachermode", "e"));
console.log(solution2("teachermode", "e"));
