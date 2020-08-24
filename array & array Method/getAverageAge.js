function getAverageAge(users) {
  let sum = 0;
  userAge = users.map((user) => user.age);
  for (let i = 0; i < users.length; i++) sum += +userAge[i];
  return sum / users.length;
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

console.log("solution 1 : " + getAverageAge(arr));

// another solution

function getAverageAge_2(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

console.log("solution 2 : " + getAverageAge_2(arr));
