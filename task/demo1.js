const prompt = require("prompt-sync")();

let input = prompt("Do you want the promise to succeed? (yes/no): ");

let MyPromise = new Promise((resolve, reject) => {
    let success = (input.toLowerCase() === "yes");


    setTimeout(() => {
        if (success) {
            resolve(" Promise resolved successfully!");
        } else {
            reject(" Promise is rejected!");
        }
    }, 2000);
});

MyPromise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log(" Promise execution finished."));