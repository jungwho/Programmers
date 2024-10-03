//

const solution = (s) => {
  let ansList = [];
  for (let i = 0; i < s.length; i++) {
    let ans = "";
    for (let j = 0; j < s.length; j++) {
      if (i !== j) ans += s[j];
    }
    ansList.push(ans);
  }

  ansList.sort();
  return ansList[0];
};

console.log(solution("codility"));
console.log(solution("abc"));
