const solution = (s, e) => {
  let ck = Array(10001).fill(0); // 방문 체크 배열
  let dis = Array(10001).fill(0); // 각 노드까지의 거리
  let queue = [];

  queue.push(s); // 시작 위치를 큐에 넣음
  ck[s] = 1; // 시작 위치 방문 체크

  while (queue.length) {
    let v = queue.shift(); // 큐에서 하나를 꺼냄

    // 목적지에 도착하면 거리 출력
    if (v === e) {
      return dis[v];
    }

    // v에서 갈 수 있는 3가지 위치 탐색
    for (let nv of [v + 1, v - 1, v + 5]) {
      if (nv >= 0 && nv <= 10000 && ck[nv] === 0) {
        // 범위 체크 및 방문 여부 확인
        ck[nv] = 1; // 방문 체크
        queue.push(nv); // 큐에 새로운 위치 추가
        dis[nv] = dis[v] + 1; // 거리는 이전 위치 + 1
      }
    }
  }
};

console.log(solution(5, 14)); // 3
console.log(solution(8, 3)); // 5
