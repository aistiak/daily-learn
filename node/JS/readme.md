
### js core concepts 
- data types 
- hoisting 
- let , var and const difference 
- call , apply , bind functions 
- Closure
- `this` in javascript  
- what is the difference between regular function and lambda functions 
- what does lexical scope mean 
- functional programming concepts 
- is JS object oriented or Functional programming language 

- promise / async await 

- type coercion
- generator functions 
- iterator functions 
- prototype chain in javascript 
- object in javascript 
- explain browser side JS runtime arch. (event loop)
- explain javascript event-loop
- what is ES / ES5 / ES6 
- JS Engine workflow 
- Garbage collection and Memory leak in JS engine *
- ways of creating object in javascript *
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

_scope_

`var` is scoped to the immediate function body , let is scoped to the immediate enclosing block 

```
var funcs = [];
// let's create 3 functions
for (var i = 0; i < 3; i++) {
  // and store them in funcs
  funcs[i] = function() {
    // each should log its value.
    console.log("My value: " + i);
  };
}
for (var j = 0; j < 3; j++) {
  // and now let's run each one to see
  funcs[j]();
}

// output 
// My value: 3
// My value: 3
// My value: 3

```
the output is same because the anonymous function were bound to the same variable . 
To avoid this immediately  invoked functions have to be used 

```

var funcs = [];
    
for (var i = 0; i < 3; i++) {
    funcs[i] = (function(index) {
        return function() {
            console.log("My value: " + index);
        };
    }(i));
}

for (var j = 0; j < 3; j++) {
    funcs[j]();
}

```

_hoisting_

`var` variables are hoisted and initialized with `undefined` so they can be referenced in scope before they are declared . 
But `let` and `const`

_creating global object property_

At top level `var` creates properties on global object , but `let` does not do so .

_redeclare_ 

`var` can redeclare variable , but `let` and `const` with throw error 
### `this` is JS 
__what is `this` keyword__ 

this keyword refers to an object that is executing current piece of code , it references the object that is executing the current function 

types of binding in JavaScript

- Default binding 
- Implicit binding 
- Explicit binding 
- Constructor call binding 

_Default binding_

A standalone function housing a `this` refers to the global object 

```
function alert() { 
  console.log(this.name + ' is calling'); 
}

var name = 'Kingsley'; 

alert(); // Kingsley is calling
```

_Implicit binding_

If a function is attached to an object then `this` inside the function will refer to that object 

```
function alert() { 
  console.log(this.age + ' years old'); 
}

const myObj = {
  age: 22,
  alert: alert
}

myObj.alert()

// 22 years old

```

_Explicit binding_

Explicit binding is when we want to force a function to use an object as its context 

we have two methods to achieve this `call()` and `apply()`

```

function alert() { 
  console.log(this.age + ' years old'); 
}

const myObj = {
  age: 22
}

alert.call(myObj); // 22 years old

```

_Constructor call binding_ 

A constructor call is when a function is called with new keyword 

when a function is called with new keyword 
- a brand new object is created or constructed 
- the newly created object is prototype linked to the function that constructed it 
- newly created object is set as this for that function call 

```

function giveAge(age) { 
  this.age = age; 
} 

const bar = new giveAge(22); 
console.log(bar.age); // 22

```


### `call` , `bind` , `apply` in JS 
`call` and `apply` is used to invoke functions immediately , `bind` returns a bound function that executes later 

___call___

the first parameter of call is the this / context and following parameters are parameters to the function being called 

```
var obj = {name:"Istiak"};

var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

console.log(greeting.call(obj,"Newtown","KOLKATA","WB"));

```

___apply___

the first parameter of bind is this / context and second parameter is an array that contains the parameters of the function being called 

```
var obj = {name:"Istiak"};

var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

console.log(greeting.apply(obj,["Newtown","KOLKATA","WB"]));

```

the only difference between `call` and `apply` is that `apply` takes function arguments as array 


___bind___

binds the function to an object to be invoked later 


```

var obj = {name:"Istiak"};

var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

var fn = greeting.bind(obj));

fn("Newtown","KOLKATA","WB")

```

### regular function vs Lambda function js 

___this binding___

arrow functions do not have there own `this` and `this` always refers to the context of the closest not arrow function 

```
function createObject() {
  console.log('Inside CreateObject :' , this.foo)
  return {
    foo : 42 ,
    bar : function () {
      console.log('Inside bar : ', this.foo)
    }
  }
}

createObject.call({foo:21}).bar()

// Inside `CreateObject` : , 21 
// Inside `bar` : 42 

```

```
function createObject() {
  console.log('Inside CreateObject :' , this.foo)
  return {
    foo : 42 ,
    bar :  () => {
      console.log('Inside bar : ', this.foo)
    }
  }
}

createObject.call({foo:21}).bar()

// Inside `CreateObject` : , 21 
// Inside `bar` : 21  

```

___arguments binding___

arguments objects are not available in arrow functions but are available in regular functions 

```
let fn = {
  showArgs() {
    console.log(arguments)
  }
}

fn.showArgs(1,2,3)
// will show the arguments object 
```

```
let fn = {
  showArgs : () => {
    console.log(arguments)
  }
}

fn.showArgs(1,2,3)

// will throw an error 

```

___new keyword___

arrow functions can not be called with new keyword 

```
let fn = () => {
  console.log(`this is an arrow function `)
}

new fn() 

// will throw an error 

```

___when not to use arrow functions___

_object methods_ 

```
var cat = {
  lives: 9,
  jumps: () => {
    this.lives--;
  }
}

```
hear cat.jumps wont do anything as arrow functions don't have any this binding , and this will refer to the nearest non arrow functions context 


_callback functions with dynamic context_ 

```
var button = document.getElementById('press');
button.addEventListener('click', () => {
  this.classList.toggle('on');
});

```
hear this was used to refer to the button , but this will not work as callback function being an arrow this will not refer to the button 

_ideal for promises and promise chains_ 

arrow functions are ideal for promise functions and chains , but will have to keep in mind how arrow functions work 


### lexical scope in javascript 

lexical scope means a variable declared outside a function can be accessed inside another function defined after the variable declaration , but opposite is not true 

### Closure 

- with closure scopes can have access to outer scopes where they were declared 
- closure is when a function remembers its lexical scope even when the function is executed outside the lexical scope 

```
function foo() {
  var bar = "bar";

  function baz() {
    console.log(bar);
  }

  bam(baz);
}

function bam(baz) {
  baz();             // "bar"
}

foo();

```

```
var foo = (function() {
  var o = { foo: "bar" };

  return { obj: o };
})();

// it's not closure, its just object reference!
console.log(foo.obj.foo);

```
- emulating private variable with closure 

```
function Counter(start) {
  var count = start;
  return {
    increment: function() {
      count++;
    },
    get: function() {
      return count;
    }
  }
}
var foo = Counter(4);
foo.increment();
foo.get(); // 5

```
#### closure in loop
##### problem-1 
- closure inside loop , a tricky thing 

```
for(var i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

```
- the code above will output 10 ten times 
- the anonymous function keeps reference to i at the time `console.log` gets called , the for loop has already finished and the value of i has been set to 10 
- in order to solve this we need to copy the value of i 

```
// 1. Avoiding the Reference Problem
for(var i = 0; i < 10; i++) {
  (function(e) {
    setTimeout(function() {
      console.log(e);
    }, 1000)
  })(i);
}
```
- the anonymous function function gets called immediately with i as an argument and will receive  a copy of i  
- now the anonymous function that gets passed to setTimeout will have a reference of e , whose value does not change while looping 

```
// 2. Avoiding the Reference Problem
for(var i = 0; i < 10; i++) {
  setTimeout((function(e) {
    return function() {
      console.log(e);
    }
    })(i), 1000)
}
```
- this is another way of doing it 

```
// 4. Avoiding the Reference Problem
for (let i = 0; i < 10; i++) {

  // using the ES6 let syntax, it creates a new binding
  // every single time the function is called
  // read more: http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads

  setTimeout(function() {
    console.log(i);
  }, 3000);
}

```
- or we could just use `let` 

```
// 5. Avoiding the Reference Problem
for(var i = 0; i < 10; i++) {
  setTimeout(console.log.bind(console, i), 1000);
}
```
- using `bind` to solve the problem 
##### problem-2 

```
function assignTorpedo (name, passengerArray) {
  var torpedoAssignment;
  for (var i = 0; i < passengerArray.length; i++) {
    if (passengerArray[i] == name {
      torpedoAssignment = function () {
        alert("Ahoy, " + name + "!\n" +
        " Man your post at Torpedo # " + (i+1) + "!");
      }
    }
  }
  return torpedoAssignment;
}

var subPassengers = ["Luke", "Leia", "Han", "Chewie", "Yoda", "Boba"];
var giveAssignment = assignTorpedo("Chewie", subPassengers);

giveAssignment();   // it shows "... Torpedo #6!" instead of "... Torpedo #4!"

```
_solution-1_

```
// solutions #1:
function assignTorpedo (name, passengerArray) {
  for (var i = 0; i < passengerArray.length; i++) {
    if (passengerArray[i] == name) {
      return function () {                                // immediately return the function
        alert("Ahoy, " + name + "!\n" +                   // so that i variable don't get the
        " Man your post at Torpedo # " + (i+1) + "!");    // chance of increment
      }
    }
  }
}

```

_solution-2_

```
// solutions #2:
function assignTorpedo (passengerArray) {
  return function(name) {
    for (var i = 0; i < passengerArray.length; i++) { // since we've put the loop inside the returned function,
        if (passengerArray[i] == name) {              // i variable will come directly from that local scope
          alert("Ahoy, " + name + "!\n" +
          " Man your post at Torpedo # " + (i+1) + "!");   
        }
      }
  }
}

var subPassengers = ["Luke", "Leia", "Han", "Chewie", "Yoda", "Boba"];
var giveAssignment = assignTorpedo(subPassengers);
giveAssignment("Chewie"); // 4

```
___What does Closure give us ?___

Closure gives our functions persistent memories and entirely new toolkit for writing professional code:

- __Helper Function:__ Everyday professional helper functions like once and memoize

- __Iterators and generators:__ Which use lexical scoping and closure to achieve the most contemporary patterns for handling data in JavaScript

- __Module Pattern:__ Preserve state for the life of and application without polluting the global namespace

- __Asynchronous JavaScript:__ Callbacks and Promises rely on closure to persist state in an asynchronous environment


### callback , Promise , async ... await
##### Synchronous and asynchronous javascript 

_synchronous_ a system is synchronous when tasks are completed one after another 

_asynchronous_ a system is asynchronous / async when task executions are independent 


javascript has three ways of handling async stuff 
- callbacks 
- promises 
- async / await 

_callback_ 

any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function 

```
function foo(call_bar) {
  // do stuff 
  call_bar()
}

function bar() {
  console.log(`hello  there`)
}

foo(bar) // bar hear is a callback function to foo

```

__callback hell__ is when nesting many callbacks creates a messy situation 
- what is node style callback 

in nodejs callbacks are passed as the last parameter to a function  

```

getStuff("books",function(err,data){
  if(!err){
    console.log(data)
  }
})

```

_promise_

- what is a promise 

a promise is an object that may product a single value in future . either a resolved value or a reason for not being resolved 

- basic syntax 

  ```
  function doStuff() {

    return new Promise((resolve,reject) => {
      callSomething(function(err,data)) {
        if(!err){
          resolve(data)
        }
        reject(err)
      }
    })
  }

  doStuff().then((response) => {
    console.log(response)
  }).catch((error) =>{
    console.log(error)
  })
  ```

- chain promises 
  we can chain promises 
  ```
  doStuff()
  .then( /* return a promise form hear*/)
  .then( /* catch the returned promise , return a promise*/)
  .then( /* catch the returned promise */)
  .catch(error => { /* catch if any error occurs */ })
  .finally(() => {  /* perform some final action */ })
  ```

- promisify callback in nodejs
  The util.promisify() method basically takes a function as an input that follows the common Node.js callback style, i.e., with a (err, value) and returns a version of the same that returns a promise instead of a callback.

  with regular callback 
  ```
  const fs = require('fs');

  fs.readFile('./sample.txt', 'utf-8', (err, data) => {
      if (err) {
          // Handle error
          console.error(err);
            return;
      }

      // Data is string do something with it
      console.log(data);
  });

  ```
  with promisify 

  ```
  const fs = require('fs');
  const util = require('util');

  // Reading the file using a promise & printing its text
  const readFile = util.promisify(fs.readFile);
  readFile('./promisify.js', 'utf8') // Reading the same file
    .then((text) => {
        console.log(text);
    })

  // Printing error if any
    .catch((err) => {
        console.log('Error', err);
    });

  ```

##### promise related functions 

- _promise.all()_

  promise all takes a iterable of promises as input and returns a single promise that resolves to an array of all the results of the input promises . The returned promise will resolve when all of the input promises have resolved  

  ```
  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
  });

  Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
  });
  // expected output: Array [3, 42, "foo"]


  ```
  the resulting promise is rejected if any of the input promises get rejected or throw error 
- _promise.any()_
  
  promise.any takes an iterable of promise objects . It returns a single promise that resolves as soon as any of the promises in the iterable fulfills , with the value of the fulfilled promise . 

  ```
  const promise1 = Promise.reject(0);
  const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
  const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

  const promises = [promise1, promise2, promise3];

  Promise.any(promises).then((value) => console.log(value));

  // expected output: "quick
  ```
  if no promise in the iterable is fulfilled then the returned promise is rejected 

  - _promise.allSettled()_

  the promise.allSettled() method returns a promise that resolved after all of the given promises have either fulfilled or rejected , with an array of object each describing the output of the promise 

  ```
  const promise1 = Promise.resolve(3);
  const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
  const promises = [promise1, promise2];

  Promise.allSettled(promises).
    then((results) => results.forEach((result) => console.log(result.status)));

  // expected output:
  // "fulfilled"
  // "rejected"  
  ```
##### _async/await_

- what is async await 

  The `async` and `await` keywords enable to write promise based code in a more readable / cleaner style , enabling to avoid promise chain  

- basic syntax

  ```
  function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }

  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }

  asyncCall();
  ```

- async await compared to promise 
  writing a promise based function 
  ```
  function foo() {
    return new Promise((resolve,reject) => {

        // do stuff 

    })
  }
  ```
  now if we write the same function with async await 
  ```

  async function foo() {
    // do stuff 
  }

  ```


- error handling 
  to handel error in async await we use `try` `catch`

  ```
  try {
    
    await foo()

  }catch(error) {
    
    console.log(error)

  }

  ``` 

#### type coercion 

- what is coercion is javascript 

  _coercion_ is used for unexpected type casting in javascript .
  a more formal definition would be "Type coercion is the automatic or implicit conversion of values from one data type to another " 

  ```
  14 + "" // "14"
  ```
  when we use `+` , `-` for adding or subtracting the values must be of the same type .
  In the above example they are definitely not , hear 14 is converted into a string and then add them together 
  > every `+` operation that involves a string will result in a string 

  and for `-`

  ```
  "12" - 2 // 10 
  "12" - 0 // 12 
  "12" - "2" // 10
  ``` 
  as we can see subtracting can be used for number only 
  > so for `-` JS will cast both values to numbers 

  adding two arrays 
  
  ```

  ["foo", "bar"] + ["alice", "bob"]   // "foo, baralice, bob"

  ```

  ``` 
  [3] - [1] // 2 
 
  ```

- some classic example 


### Generator functions and Iterators  
- what is generator functions 

  - The function keyword followed by a asterisk defines a generator function `function*` , which returns a Generator Object .
 

  - A Generator Object confirms to both `iterable protocol` and `iterator protocol` 

  - The `iterable protocol` allows javascript object to define or customize their iteration behavior , such as what values are looped over . Built in iterables with defined behavior are Array , Map , String etc 
  
  - To make an object iterable an object must have a property with `@@iterator` / `[Symbol.iterator]` key , and the value has to be a zero argument function that returns an object , the returned object must confirm to `iterator protocol`


  - The `iterator protocol` define a standard way to product a sequence of values and potentially a return value when all values have been generated 

  
  - an object is an iterator when it implements a next() method will the following semantics 
    - it can take zero or one argument , if next() is called with one argument then the argument will be available to the next() method 
    - must return an object with done(boolean) , value (any) keys  
  
  
  ```
    // customizing a strings default iterator 

    const name = "arif"
    
    var it = name[Symbol.iterator]() 
    it.next() // {value : "a",done : false}

    name.__proto__[Symbol.iterator] = function () {

      return {
        next : function () {
          return {done : false , value : 'hello'}
        }
      }
    }

    var it = name[Symbol.iterator]() 
    it.next() // {value : 'hello' , done : false }

  ```
 
- basic syntax
  
  ```
    function* generator() {
      yield 1 ;
      yield 2 ;
      yield 3 ;
    }
    const gen = generator() 
    console.log(gen.next().value) // 1 
    console.log(gen.next().value) // 2
    console.log(gen.next().value) // 3 

  ```
  Generators are functions that can be exited and later re-entered . Their context will be saved across re-entrance

  user defined iterable
  
  ```
    const myIter = {} 
    myIter[Symbol.iterator] = function*(){
      yield 1 ;
      yield 2 ;
      yield 3 ;
    }
    console.log([...myIter]) // [ 1, 2, 3]
  ```
- a generator function does not execute immidiately it returns an iterable object 
- when next() is called on the iterable object the function body executes until the next `yield` expression , which specifies
  the value to be returned from the iterator 
- `yield*` delegates to another iterator function 

  ```
    function* anotherGenerator(i) {
      yield i + 1;
      yield i + 2;
      yield i + 3;
    }

    function* generator(i) {
      yield i;
      yield* anotherGenerator(i);
      yield i + 10;
    }

    var gen = generator(10);

    console.log(gen.next().value); // 10
    console.log(gen.next().value); // 11
    console.log(gen.next().value); // 12
    console.log(gen.next().value); // 13
    console.log(gen.next().value); // 20
    


- `return` statement will make the generator finish and make done true  

- passing argument to next will replace `yield` with that argument 

  ```
  function* logGenerator() {
    console.log(0);
    console.log(1, yield);
    console.log(2, yield);
    console.log(3, yield);
  }

  var gen = logGenerator();

  // the first call of next executes from the start of the function
  // until the first yield statement
  gen.next();             // 0
  gen.next('pretzel');    // 1 pretzel
  gen.next('california'); // 2 california
  gen.next('mayonnaise'); // 3 mayonnaise

  ```

- generators can not be constructed 


### over view of JS built in Objects 

## OLOO 

todo 

## Event loop
- components 
- describe the whole process 
- diagram 
- process.nextTick 

### components 

- task/event queue 
- call stack 
- heap 
- node-api / web api 
- thread pool 
- event loop 

#### process 
- request comes and gets queued up in the event queue 
- event loop takes event from the queue and places in the call stack 
- call stack processes the code / event 
- if memory is required it is allocated dynamically from the heap 
- if task is cup bound then it is executed blocking the main thread and response is returned 
- if task is I/O bound the event is send to web api in client side and node api in server side 
- the web-api maps the task to a thread from the thread pool 
- when the task finished it is then again put back in the event queue 
- event loop again picks it up from the queue and places in the stack 

### Diagram 

![](https://i.imgur.com/fgyQROJ.png)

### process.nextTick() 
> process. nextTick puts a callback into a queue. Every callback in this queue will get executed at the very beginning of the next tick of the event loop. It's basically used as a way to clear your call stack

> When in Node JS, one iteration of the event loop is completed. This is known as a tick. process. nextTick() taking a callback function which is executed after completing the current iteration/tick of the event loop
#### JS engine refs 
- https://lzomedia.com/blog/modern-js-engine-workflow/
- https://github.com/aistiak/MyDailyLearn/blob/master/javascript/js-foundation.md 