// functions passing another function as an argument 


// 1. handle asynganous operation
// 2.custamise behaiver of gendral perpose functions
// 3.avoid blocking code exicution

// this is our callback function
function greetUser(name){
console.log('hello ${name}');
}

// this function takes anothers(callback function ) as an parameter
function getUserInput(callback){
    const name = "rabachaa";
    callback(name);  //calling the callback function with the user's name 
}

getUserInput(greetUser);

// multiple nested callback make the code deficult to read and maintain