// recursion 
function fib(n) {
  if (n == 1 || n == 2) return 1;
  else return fib(n - 1) + fib(n - 2);
}

function fibVer2(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fibVer2(77));
// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5
// 3 + 5 = 8
