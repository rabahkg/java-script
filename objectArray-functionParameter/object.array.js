const students = [
    {name:'ali', age:20, grade:'A'},
    {name:'rabah', age:23, grade:'B'},
    {name:'abu', age:22, grade:'A+'},

]

// accessong dates
console.log(students[1].name);
console.log(students[2].grade);

// looping through object array
students.forEach(stdnts => {
    console.log(`${stdnts.name} is ${stdnts.age} years old`);
    
})


