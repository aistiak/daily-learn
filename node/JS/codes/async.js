
function AsyncFn(){

    return new Promise((resove,reject)=>{

        setTimeout(() => {
            resove("task 1")
        }, 3000);
    })
}

function* genFn () {

    yield AsyncFn()
    yield "task 2"
    yield Promise.resolve("task 3")

}

const it = genFn()

function handleAsync(){
    const {done , value} = it.next()
    console.log({done,value})
    if(done) return 

    if(value instanceof Promise) {
        value.then(handleAsync) // bhuji nai 
    }else {
        handleAsync()
    }
}

handleAsync()