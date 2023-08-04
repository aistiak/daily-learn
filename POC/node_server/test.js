


function fn(){
    // console.log(a,b)
    const path = arguments[0]
    const args = Object.values(arguments)
    args.shift()
    console.log(args)
}

fn(1,2,3,4)