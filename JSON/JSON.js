let user = {
    name: "John Smith",
    age: 35
};
let jsonUser =  JSON.stringify(user);
console.log(jsonUser);

jsonParseUser = JSON.parse(jsonUser);
console.log(jsonParseUser);