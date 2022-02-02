
### js core concepts 
- data types 
- hoisting 
- let , var and const difference 
- Closure
- promise / async await 
- type coercion
- generator functions 
- iterator functions 
- prototype chain in javascript 
- object in javascript 
- call , bind , apply
- `this` in javascript  
- explain browser side JS runtime arch. 
- functional programming concepts 
- is JS object oriented or Functional programming language 
- what is ES / ES5 / ES6 

### Data types in JS 

JavaScript is a _loosely type_ and _dynamic language_ . Variables in js are not particularly associated with any particular value type and any variable can be assigned or reassigned values of all types 

JS has two sets of types 
1. Primitive values _and_ 
2. Object 

the primitive types (7) are 

1. Boolean 
2. Null 
3. Undefined 
4. Number 
5. Bigint 
6. String
7. Symbol 

_NULL_   
- this type has exactly one value and its `null` 

_Undefined_ 
- a variable that has not been assigned a value has an undefined value 

_Number_ 
- the type is a 64-bit binary format , it has numbers between ` - ( 2 ^ 53 - 1 )` to `2 ^ 53 - 1` 
- it also represents floating-point numbers 
- has 3 symbolic values `+Infinity` , `-Infinity` and `NaN` 
- `Number.MAX_VALUE` (`+Infinity`) , `Number.MIN_VALUE` 
(`-Infinity`)
- `+0 === -0` is `true`. 
- `42 / +0` is `Infinity` and `42 / -0` is `-Infinity`

_BinInt_ 

- The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary precision. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit for Numbers
- it can be created with a constructor or by appending `n` at the end of the number 
- `const x = 2n ** 53n`
- all math operators are valid for BigInt 
- BinInt is loosely equal to Number but not Strictly 
- BigInt cannot be operated on interchangeably with Numbers. Instead a TypeError will be thrown.

_String_
- Unlike some programming languages (such as C), JavaScript strings are immutable. This means that once a string is created, it is not possible to modify it.

- However, it is still possible to create another string based on an operation on the original string . ex : `String.substr()` , or `String.substr()` or `+`

_Symbols_
- A Symbol is a unique and immutable primitive value and may be used as the key of an Object property . In some programming languages, Symbols are called "atom"

### concept / characteristics of Functional Programming (FP)
Functional programming is a declarative type of programming that treats computations as the evaluation of mathematical functions .

1. Pure Function 

2. Recursion 

3. High Order Function 

4. Immutability 

__pure function__

a function is considered to be a pure function if 
- it returns the same result when given the same argument 
- does not cause any side effect (changes on outside world)

__recursion__

in functional programming iteration (for/while loop) is performed through recursion ,  terminates when it reaches base case 

__Higher order function__

higher order functions are functions that can either take other functions as arguments or return them as results 

__Immutability__

Means a variable can no be changes one initiated 
### is JS object oriented or Functional Programming language 
(spoiler) JS is a procedural language 

Procedural programming is a programming paradigm  built around the idea that programs are sequence of instructions to be executed 

JavaScript has support for object oriented programming using prototypes . However it is not the common way to do OOP 

It can also be used for Functional Programming but we have to take care of the immutability feat. ourselves  

JS is also called a scripting language 

_( OOP , FP , Procedural are programming paradigms )_

A scripting language is a programming language designed specifically for runtime environments. It automates the execution of tasks. They are used in system administration, web development, games, and creating plugins and extensions . An Interpreter executes instructions written in a programming or scripting language directly, without requiring them previously to have been compiled into a machine language program

