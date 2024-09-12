// Array.from
let l = Array(3).fill(0);
console.log(l);

let ll = Array.from(Array(3), () => 0);
console.log(ll);

let lll = Array.from(Array(3), () => Array(4).fill(0));
console.log(lll);
