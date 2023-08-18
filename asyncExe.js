
// console.log("Synchronous Programming");

// for (let index = 0; index < 5; index++) {
//     const element = index;
//     console.log("This is index " + index);
    
// }

// console.log('Completed!!');


// 
console.log("Asynchronous Programming");

setTimeout(() => {
    for (let index = 0; index < 10; index++) {
        const element = index;
        console.log("This is index number" + index);        
    }
}, 100);

console.log('Completed');
