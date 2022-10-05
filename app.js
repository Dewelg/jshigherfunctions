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



   


