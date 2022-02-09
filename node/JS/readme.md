
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
- what is the difference between regular function and lambda functions 
- JS Engine workflow 
- Garbage collection and Memory leak in JS engine 
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
### hoisting 
when a variable is declared in JS it gets "hoisted" on top of the current scope . meaning on top of the current function or top of the current script if the variable is not in a function 
- variables declared with `var` get hoisted and initialized with `undefined` 
- variable declared with `const` and `let` also get hoisted , but unlike `var` they don't get initialized with any default value so if they get referenced before initialization an exception will be thrown 
- `const` has to be initialized at the time of declaration 
- function declarations also get hoisted 
- function expressions are not hoisted they are treated as assignment 

function declaration hoisting 

```
function getMysteryNumber () {  |  // loads like this
  function chooseMystery() {    |  function getMysteryNumber() {
    return 12;                  |    function chooseMystery() {
  }                             |      return 12;
                                |    }
  return chooseMystery();       |   function chooseMystery() {  // it replaced the above chooseMystery function
                                |     return 7;
  function chooseMystery() {    |   }
    return 7;                   |   return chooseMystery(); // output: 7;
  }                             |
}                               |   }   
```

function expression hoisting 

```
function getMysteryNumber() {         | function getMysteryNumber() {
  var chooseMystery = function(){     |   var chooseMystery = undefined;
    return 12;                        |   var chooseMystery = undefined;  // replace the above 'chooseMystery'
  }                                   |   chooseMystery = function() {
  return chooseMystery();             |     return 12;
                                      |   }
  var chooseMystery = function() {    |   return chooseMystery();        // return 12;
    return 7;                         |   chooseMystery = function() {  // this section is unreachable
  }                                   |     return 7;                   // because it is below return statement
}                                     |   }
                                      |  }

```

#### hoisting load order 
- functions get hoisted first then variables 
- a var declaration is without effect if same name is taken by a function or another var 

```
function f(){}
var f;
console.log(f);

var g;
function g(){}
console.log(g);

// output 
// function f() {} 
// function g() {} 
```

todo 
- https://stackoverflow.com/questions/28246589/order-of-hoisting-in-javascript
- https://github.com/aistiak/MyDailyLearn/blob/master/javascript/hoisting.md 

#### why is hoisting important 
`Hoisting` is required for mutual recursion 
```
a(1);     // ??, Ans: 39

function a(foo) {
  if (foo > 20) return foo;
  return b(foo+2);
}
function b(foo) {
  return c(foo) + 1;
}
function c(foo) {
  return a(foo*2);
}
```

#### interesting reads 
- https://stackoverflow.com/questions/36832529/is-hoisting-really-necessary-in-javascript-to-enable-mutual-recursion

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

### JS Engine Workflow 

JS engine is a program that executes JS code , every browser has its own JS engine , for example 
- chrome - V8
- Edge - Chakra 
- Safari - Nitro 
- FireFox - Spider Monkey 

JS engine contains of (1) call stack (2) Heap 

_call stack_  keeps track where we are in code so that we can run code in order 

_heap_ is where memory allocation happens (allocate / use / release memory ) 

before JS engine workflow we need to understand (i) compiled (ii) interpreted (iii) Just In Time (JIT) compiler  

_compiler_ 

hear we have the source code which is converted to machine code of 1's and 0's and written to a file , and then the file is executed 

so there are 2 steps 
- the source code get converted to a portable file 
- the portable file is then executed 


_interpreter_ 

the interpreter goes through the source code and runs line by line . JS is a interpreted language , it is very slow . 
Modern JS is now both compiled and interpreted which is called Just-In-Time compiler 

_Just In Time Compile_ 

In this process the source code is converted into machine code and executed immediately , no portable file is created . This is lot faster then going line by line 

the steps hear are 

- the source code is parsed and converted to AST (Abstract Syntax Tree)
- the parsed code is compiled to machine code 
- the machine code is directly run without creating any portable file 


Now modern JS Engine has more optimization strategies 

- modern JS engine uses very clever optimization strategies 
- it creates very un optimized version of the machine code to start the execution as fast as possible 
- In background this code is optimized and re-compiled in already running execution , this can be done multiple times without stopping the execution 
- this process make modern JS fast . All this parsing , optimization , execution happens in some thread inside the JS Engine , which can be accessed by the source code 



### Garbage Collection and Memory Leak 

### let , var const difference 

_hoisting_

_scope_

_redeclare_ 
### `this` is JS 

### regular function vs Lambda function js 

#### JS engine refs 
- https://lzomedia.com/blog/modern-js-engine-workflow/
- https://github.com/aistiak/MyDailyLearn/blob/master/javascript/js-foundation.md 