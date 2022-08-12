- must know design patterns 
  - Observer 
  - Decorator 
  - strategy  
  - state 
  - bridge 
  - adapter 
  - builder 
  
- feats. of OOP
- feats. of Functional Programming 
- SOLID concepts 
- DRY principle 


## How to learn design patterns  
1. find out which type of pattern it is (creational/behavioral/Architectural) 
2. find out the actors / components 
3. the properties & methods of every component 
4. the relation among components 
5. simulate 

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

- open to extension close to modification 

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

### Strategy Pattern 

In Strategy pattern we define a family of algorithms and encapsulate them so that they are interchangeable 

#### actors  
- a context class (has reference of strategy , and a method to implement that strategy )
- a strategy interface ( has an 'execute' method )
- concrete strategies (implements 'execute' method )
- objects of context class 


```

// The strategy interface declares operations common to all
// supported versions of some algorithm. The context uses this
// interface to call the algorithm defined by the concrete
// strategies.
interface Strategy is
    method execute(a, b)

// Concrete strategies implement the algorithm while following
// the base strategy interface. The interface makes them
// interchangeable in the context.
class ConcreteStrategyAdd implements Strategy is
    method execute(a, b) is
        return a + b

class ConcreteStrategySubtract implements Strategy is
    method execute(a, b) is
        return a - b

class ConcreteStrategyMultiply implements Strategy is
    method execute(a, b) is
        return a * b

// The context defines the interface of interest to clients.
class Context is
    // The context maintains a reference to one of the strategy
    // objects. The context doesn't know the concrete class of a
    // strategy. It should work with all strategies via the
    // strategy interface.
    private strategy: Strategy

    // Usually the context accepts a strategy through the
    // constructor, and also provides a setter so that the
    // strategy can be switched at runtime.
    method setStrategy(Strategy strategy) is
        this.strategy = strategy

    // The context delegates some work to the strategy object
    // instead of implementing multiple versions of the
    // algorithm on its own.
    method executeStrategy(int a, int b) is
        return strategy.execute(a, b)


// The client code picks a concrete strategy and passes it to
// the context. The client should be aware of the differences
// between strategies in order to make the right choice.
class ExampleApplication is
    method main() is
        Create context object.

        Read first number.
        Read last number.
        Read the desired action from user input.

        if (action == addition) then
            context.setStrategy(new ConcreteStrategyAdd())

        if (action == subtraction) then
            context.setStrategy(new ConcreteStrategySubtract())

        if (action == multiplication) then
            context.setStrategy(new ConcreteStrategyMultiply())

        result = context.executeStrategy(First number, Second number)

        Print result.

```

- strategy pattern delegates responsibilities to object instead of methods 
- languages which have functional types can easily implement this with a dynamic function 
  no need to blot code with extra class and interfaces 
- this pattern uses composition instead of inheritance to solve problem 

### State Pattern 

