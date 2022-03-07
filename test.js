

const arr = [1,2,3]

const it = arr[Symbol.iterator]() 

while(true){
    const {value,done} = it.next()
    if(done) break 
    console.log(value)
}

// Output 
// 1
// 2
// 3
