// Exercise 1 Section
function plus(number){
    return function(plusnumber){
        return(number + plusnumber);
    }
}

let plus15 = plus(15);
plus15(10);
console.log(plus15(10));

//exersice2
let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
]; 

users.forEach(user => console.log(user.name));

//exerise3
users.map(user => console.log(user.name, user.score));

//exersice4
let active = users.filter((users) => users.isActive == true);


console.log(active);

//exersice5

users.sort((a,b) => {
  if (a.score < b.score) return 1;
  else return -1;
});

console.log(users);

//exersice6 - Didn't get this correct (was supposed to put sum as a paramter and + it to user.score)
let total = 0;
let sum = users.reduce((users) => users.score += total);

console.log(sum);