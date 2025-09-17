// a promise in js is an object that represent the eventual complition or failure of an asynchronous operation and its resulting value 
// resolve - call when the operation is secuss 

// .then - execute if the promise isresolved 
// .catch - execute when the promise is rejected 
// .finally - execute regardless of whether the promise is resolved or rejected 

// creating promise 
let myPromise = new Promise((resolved,reject) => {

    let success = false;

    setTimeout(()=>{
        if (success){
            resolved("promise resolved successfully!")
    }else{
        reject("promise rejected")

    }
},2000) 
})

myPromise
.then(result => console.log(result))
.catch(error=> console.log(error))
.finally(()=> console.log("promise is executed"));

// creating promise object

