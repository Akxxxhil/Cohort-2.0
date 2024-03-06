const inputArray=[1,2,3,4,5]

function transform(i){
    return i*2;
}

const ans=inputArray.map(transform)

/// you can also pass the fucntion as a argumen directly


//const ans=inputArray.map(function transform(i){
//     return i*2;
// })
console.log(ans);
