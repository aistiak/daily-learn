// write a iterator 
// var obj = {
//     c : 1 ,
//     next() {
//         if (this.c < 3)
//             return {
//                 done: false,
//                 value: this.c++
//             }

//         return {
//             done : true ,
//             value: undefined
//         }
//     }
// }
var obj = {}
obj[Symbol.iterator] = function () {

    return {
        c: 1,
        next() {
            if (this.c < 3)
                return {
                    done: false,
                    value: this.c++
                }

            return {
                done: true,
                value: undefined
            }
        }
    }
}
console.log(obj[Symbol.iterator])

const it2 = obj[Symbol.iterator]()
console.log(obj)
console.log(it2.next())
console.log(it2.next())
console.log(it2.next())
console.log(it2.next())
console.log(it2.next())
console.log(it2.next())
// const name = "arif"
// const it1 = name[Symbol.iterator]()
// console.log(it1.next())
// console.log(it1.next())
// console.log(it1.next())
// console.log(it1.next())
// console.log(it1.next())
// console.log(obj.next())
// console.log(obj.next())
// console.log(obj.next())

// write a generator 

// function* generator() {
//     yield 1 ;
//     yield 2 ;
//     yield 3 ;
//   }
//   const gen = generator() 
//   console.log(gen)
//   console.log(gen.next().value) // 1 
//   console.log(gen.next().value) // 2
//   console.log(gen.next().value) // 3 

// async behaviour 