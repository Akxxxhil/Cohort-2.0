const inputArray=[1,2,3,4,5]

function even (i){
    if(i%2==0){
        return true
    }
    else {
        return false
    }
}

const ans =inputArray.filter(even)
console.log(ans);