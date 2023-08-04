// deep copy and shallow copy in js 
// interator generator and async behaviour 

function useState(arg) {
    let state = arg 

    function setState (arg){
        state = arg 
        return state
    }

    function getState(){
        return state
    }

    return [state,setState,getState]
}

const [state,setState,getState] = useState(10)

setState(20)
console.log(state,getState())


// function R() {
//     function add() {
//         let c = 2;
//         function add() {
//             c = c + 2
//             return c
//         }
//         return [c, add]
//     }

//     return{ add }
// }

// const r = R()
// const [c, fn] = r.add()

// console.log(c, fn())
// console.log(c, fn())
// console.log(c, fn())