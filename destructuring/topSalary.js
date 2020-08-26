function topSalary(salaries) {
  
  let highest = 0;
  let name = null;
  let [...items] = Object.entries(salaries);
  for (let item of [...items]) {
    if (item[1] > highest) {
      highest = item[1];
      name = item[0];
    }
  }
  return name;
}

let salaries = {
  Jonh: 100,
  Pete: 300,
  Mary: 250,
  
};


console.log(topSalary(salaries));