// 이진트리 순회

const solution = (n) => {
  let answer = [];

  let preList = [];
  let inList = [];
  let postList = [];

  const PRE = (lv) => {
    if (lv > n) return;
    preList.push(lv);
    PRE(lv * 2);
    PRE(lv * 2 + 1);
  };
  const IN = (lv) => {
    if (lv > n) return;
    IN(lv * 2);
    inList.push(lv);
    IN(lv * 2 + 1);
  };
  const POST = (lv) => {
    if (lv > n) return;
    POST(lv * 2);
    POST(lv * 2 + 1);
    postList.push(lv);
  };
  PRE(1);
  IN(1);
  POST(1);
  answer.push(preList);
  answer.push(inList);
  answer.push(postList);
  return answer;
};

console.log(solution(7));
