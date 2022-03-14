## Ways to create object in JavaScript 

there are 4 ways to create object in JavaScript 

1. Object literal 
2. new keyword / constructor call 
3. Object.create 
4. Class 


### Object literal 

```
var Car = {
    name  :  'volvo',
    type  :  'car' ,
    color : 'red'
}
```
### new keyword 

a constructor call is when a function is called with a new keyword 

```
function Car (name,color) {
    this.name = name 
    this.color = color
}

var myCar = new Car('volvo','red')

myCar.name // 'volvo'
myCar.color // 'red'

```

### Object.create

`Object.create` allows us to create an object by specifying its prototype 

```
var Car = {
    name  :  'volvo',
    type  :  'car' ,
    color : 'red'
}

var ElectricCar = Object.create(Car) 

ElectricCar.color // 'red' 
```


### Class 

ECMAScript 6 introduced class keyword which can be used to create object 

```
class Car {

    constructor(name,color){
        this.name = name 
        this.color = color
    }

    getInfo(){
        console.log(`${this.name} is ${this.color}`)
    }
}

var myCar = new Car('volvo','red') 

myCar.getInfo()

```