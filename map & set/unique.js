function unique(arr) {
  let set = new Set();
  for (let i = 0; i < arr.length; i++) set.add(arr[i]);
  return Array.from(set);
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];
// another version
function unique_2(arr) {
  return Array.from(new Set(arr));
}

console.log(unique(values));
console.log(unique_2(values));
