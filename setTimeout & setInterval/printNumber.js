function printNumber(from, to) {
  setTimeout(function run() {
    console.log(from++);
    
    if (from <= to) setTimeout(run, 1000);
  }, 1000);
}

printNumber(5, 10);

function printNumberVer2(from, to) {
  let timerId = setInterval(() => {
    console.log(from++);
    if (from > to) clearInterval(timerId);
  }, 1000);
}

//printNumberVer2(5, 10);
