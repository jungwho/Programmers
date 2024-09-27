function solution(tickets) {
  var answer = [];
  let country = [];
  for (let i = 0; i < tickets.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (tickets[i][j] !== "ICN" && country.indexOf(tickets[i][j]) === -1)
        country.push(tickets[i][j]);
    }
  }
  country.sort();
  country.unshift("ICN");
  let graph = Array.from(Array(country.length), () =>
    Array(country.length).fill(0)
  );
  for (let i of tickets) {
    graph[country.indexOf(i[0])][country.indexOf(i[1])] = 1;
  }

  const DFS = (x) => {
    answer.push(country[x]);
    if (answer.length === tickets.length + 1) {
      return;
    }
    for (let i = 0; i < graph.length; i++) {
      if (graph[x][i] === 1) {
        graph[x][i] = 0;
        DFS(i);
      }
    }
  };

  

  return answer;
}

console.log(
  solution([
    ["ICN", "JFK"],
    ["HND", "IAD"],
    ["JFK", "HND"],
  ])
);

console.log(
  solution([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ])
);
