// Array.from
console.log(Array.from("hoo")); // ["h", "o", "o"]
console.log(Array.from([1, 2, 3], (x) => x + x)); // [2, 4, 6]
console.log(Array.from({ length: 5 }, (x) => 1)); // [1, 1, 1, 1, 1]
