let i;
for (i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);

let j;
for (j = 3; j > -1; j--) {
  console.log(j);
}
console.log(j);

let l = Array.from({ length: 5 }, (x, i) => (x = i + 1));
l.push(6);
console.log(l);

const l02 = [0, 1, 2, 3, 4, 5];
console.log(l02.splice(4, 0, 10, 11, 12)); // []
console.log(l02); // [0, 1, 2, 3, 10, 11, 12]
