const person = {name:'listin', age:22, country:'india'};
// basic destructimg 
const {name,age} = person;
console.log(name);
console.log(age);


// rename variables
const {country:nation} = person
console.log(nation);

// defult values
const {gender = "male"} = person
console.log(gender);


