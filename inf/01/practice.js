const l = [2, 4, 2, 3, 6, 9];

// for each
function forEachEX(fnc) {
  for (let i = 0; i < l.length; i++) {
    fnc(l[i], i);
  }
}

l.forEach((v, i) => {
  console.log(v, i);
});

// map
function mapEx(fnc) {
  let ans = [];
  for (let i = 0; i < l.length; i++) {
    ans.push(fnc(l[i], i));
  }
  return ans;
}

let res01 = l.map((v, i) => {
  return v ** 2;
});

let res02 = l.map((v, i) => {
  if (v % 2 == 0) return v + 1;
});
console.log(res01);
console.log(res02);

// filter
function filterEx(fnc) {
  let ans = [];
  for (let i = 0; i < l.length; i++) {
    if (fnc(l[i], i)) {
      ans.push(l[i]);
    }
  }
}

let res03 = l.filter((v, i) => {
  return v % 2 == 0;
});

console.log(res03);

// reduce
function reduceEx(fnc, val) {
  let ans = val;
  for (let i = 0; i < l.length; i++) {
    ans = fnc(ans, a[i]);
  }
  return ans;
}

let res04 = l.reduce((acc, cur) => acc + cur);
let res05 = l.reduce((acc, cur) => {
  return acc + cur;
}, 5);
let res06 = l.reduce((acc, cur) => acc - cur, 100);

console.log(res04);
console.log(res05);
console.log(res06);

// splice

const l01 = [0, 1, 2, 3, 4, 5];
console.log(l01.splice(2, 2)); // [2, 3]
console.log(l01); // [0, 1, 4, 5]

const l02 = [0, 1, 2, 3, 4, 5];
console.log(l02.splice(4, 0, 10, 11, 12)); // []
console.log(l02); // [0, 1, 2, 3, 10, 11, 12]

const l03 = [0, 1, 2, 3, 4, 5];
console.log(l03.splice(-3, 2, 9, 10)); // [3, 4]
console.log(l03); // [0, 1, 2, 9, 10, 5]

// toUpperCase, toLowerCase

const s = "JungHoo";
let ans = s.toUpperCase();

let cnt = 0;
for (let i of s) {
  if (i === i.toUpperCase()) cnt++;
}
console.log(cnt);
