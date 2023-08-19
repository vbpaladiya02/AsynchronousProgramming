const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, network
    setTimeout(function(){
        console.log('Promise one is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise one resolved");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Promise two completed");
        resolve()
    }, 2000)
}).then(function(){
    console.log("Promise two resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "promiseThree", email: "promisethree@example.com"})
    }, 3000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "vivek", password: "vivek123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 4000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise four is either resolved or rejected"))
