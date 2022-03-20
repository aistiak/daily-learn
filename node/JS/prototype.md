
### prototype chaining 
- JavaScript is a bit confusing for developers experienced in class-based languages (like Java or C++), as it is dynamic and does not provide a class implementation per se (the class keyword is introduced in ES2015, but is syntactical sugar, JavaScript remains prototype-based).
- constructor call makes an object , linked to its prototype 
- constructor call is a function with new keyword 

#### __proto__ , [[prototype]] and prototype 

- `__proto__` gives direct access to an objects prototype , __proto__ setter allows [[prototype]] to be mutated 
- `prototype` is the object that is used to build __proto__ when a function is called with new keyword 
- [[prototype]] is object specified its prototype as an internal property 

- `prototype` is not available on the instance itself but only in the constructor functions 
- `prototype` is only available on functions since they are copied form `functions` and `object` to create __proto__ 
- `__proto__` is available everywhere 
- a method declared directly to function will be considered a static method , meaning it wont be available in the instance but only in the function itself 

  ```
    function A() {
      function someMethod () {
        console.log(`hello`)
      }
    }

    const ob = new A() 
    ob.someMethod() // TypeError 
  ```


- when a property is not found in an object it looks up in the __proto__ , if also not available there then the upper level __proto__ and this continues until __proto__ is `null` 
- `hasOwnProperty` check if an object has a property not on its __proto__ 