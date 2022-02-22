- must know design patterns 
- feats. of OOP
- feats. of Functional Programming 
- SOLID concepts 
- DRY principle 


## Design Patterns 

design pattens can be categorized in there categories 

1. Creational  
2. Behavioral 
3. Architectural

some of the most used design patterns are 

1. Observer 
2. Singleton 
3. Factory 
4. Command 
5. Decorator 



### Observer (Behavioral)

Observer pattern is a subscription model where objects subscribe to an event and get notified when it occurs . This pattern is the corner of event driven programming including javascript . This pattern is also known as pub/sub or publish/subscribe pattern 

the participants hear are 

1. Subject 
    - maintains a list of observers 
    - implements interface for observers to subscribe and unsubscribe 
    - sends notification to observers when state changes 
2. Observers
    - has a function signature that can be called when the subject changes 

```
class Subject {

  constructor() {
  	this.subscribers = [] 
  }
  subscribe(fn) {
  	this.subscribers.push(fn)
  }
  unsubscribe(fn) {
  	this.subscribers = this.subscribers.filter( v => v != fn)
  }
  notify(arg) {
  	this.subscribers.map(subscriber => subscriber(arg))
  }
}

const subject = new Subject() 

const fn1 = (arg) => console.log(`fn1 received ${arg}`)

subject.subscribe(fn1) 

subject.notify('hello there')

subject.unsubscribe(fn1)

subject.notify('hello there again ')

subject.subscribe(fn1) 

subject.notify('are you there !')

// output 
// fn1 received hello there
// fn1 received are you there ! 

```


## Decorator pattern (Architectural) 

decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper object that contain the behavior 

decorator is also called wrapper 
__what problem does it solve?__

todo 


__Actors__ 
- BaseClass
- Children of BaseClass (Extends BaseClass )
- DecoratorClass (extend base class and has a BaseClass type field)
- Children of Decorator class (Extends DecoratorClass)
- children of decorator class will decorate the `BaseClass` children 

__process__
- there will be a `BaseClass` 
- the direct children of base class are to be decorated 
- Decorator Base  class will extend the base class with an extra field of type `BaseClass` 
- the children of the BaseClass will be known as `decorators`


![Diagram](https://64.media.tumblr.com/fc8b7569ab97cbb42b8dafa4a79c170c/f1b1b3c8b37d3b72-19/s1280x1920/85e138743d6d306bb50166d2c77e5773388d5c26.jpg)

```
/** Base class */
class Pizza {
    
    constructor(price) {
        this.price = price 
    }
    
    cost() {
        return this.price 
    }
}
/** Base Children */
class VeganPizza extends Pizza {
   constructor() {
    super(0)
    this.price =  200 
   }
}

class RegularPizza extends Pizza {
    constructor(){
        super(0)
        this.price = 300 
    }
}
/** decorator base  */
class PizzaDecorator extends Pizza {
    
    constructor(pizza,price){
        super(price)
        this.pizza = pizza 
    }   
}
/** decorators  */
class ExtraOnion extends PizzaDecorator {
    
    constructor(pizza){
        super(pizza,20)
        this.pizza = pizza 
    }
    
    cost() {
        return this.price + this.pizza.cost()
    }
}

class ExtraCrust extends PizzaDecorator {
    
    constructor(pizza){
        super(pizza,50)
        this.pizza = pizza 
    }
    
    cost() {
        return this.price + this.pizza.cost()
    }
}

let pizza = new VeganPizza()

/** decorating the pizza */
pizza = new ExtraOnion(pizza)
pizza = new ExtraCrust(pizza)

console.log(pizza.cost())
```