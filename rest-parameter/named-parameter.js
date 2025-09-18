function greet(fname,lname,...titles ){
console.log(`name: ${fname}${lname}`);
console.log(`Titles: ${titles.join(', ')}`);
}

greet("rabah", "kg", "engineer", "developer");