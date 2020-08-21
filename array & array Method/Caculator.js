function Caculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.caculator = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) return NaN;

    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
      this.methods[name] = func;
  }
}

let calc = new Caculator;

console.log(calc.caculator("3 + 7"));