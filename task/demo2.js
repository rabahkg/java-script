function getUser() {
    return new Promise(resolve => {
        setTimeout(() => resolve(" User fetched"), 1000);
    });
}

function getPosts() {
    return new Promise(resolve => {
        setTimeout(() => resolve(" Posts fetched"), 1500);
    });
}

function getComments() {
    return new Promise(resolve => {
        setTimeout(() => resolve(" Comments fetched"), 1200);
    });
}

// Run in sequence
getUser()
    .then(result => {
        console.log(result);
        return getPosts();
    })
    .then(result => {
        console.log(result);
        return getComments();
    })
    .then(result => console.log(result))
    .finally(() => console.log(" All data fetched in sequence"));