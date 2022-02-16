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


#### Decorator pattern (Architectural) 

decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper object that contain the behavior 

decorator is also called wrapper 

