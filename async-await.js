// async marks a function that will return a promise 
// await-promise the function execution until a promise is resolved 
// it makes asyncronous look and behave like syncronous code 

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("data loaded!!")
        }, 2000)
    })
}

async function getData() {
    console.log("start");
    const result = await fetchData();
    console.log(result);
    console.log("end");
}
getData()