## Garbage Collection in js 

- what is Garbage collection in general 
- how does it work in JS 
- what is memory leak , and types of memory leak in js 
- why using `delete` is not a good idea 


### what is garbage collection 

Garbage collection of GC is a form of automatic memory management . Its purpose is to monitor memory allocation and determine when a block of allocated memory is no longer needed and reclaims it 


### Garbage collection JS 

- main concept in JS memory management is reachability 
- reachable values are those that are accessible or useable somehow . these are guaranteed to be stored in the memory 
- roots are always reachable 
- roots are 
  - currently being executed function , its local parameter and variables 
  - other functions on the current chain of nested calls 
  - global variables 
- any other value is considered reachable if reachable from root by reference or chain of reference 
  ```
    let user = {name : 'istiak'} // Object referenced in memory 
    user = null // as now the object is not
    // referenced anymore it has become unreachable , and will be  garbage collected 
  ``` 

- interlinked objects 
  ```
  function marry(man,women)
      woman.husband = man;
      man.wife = woman;

        return {
          father: man,
          mother: woman
        }
      }

      let family = marry({
        name: "John"
      }, {
        name: "Ann"
      });
  ```
  marry function marries (links) two objects , now if we want to remove first object / father from memory we need to 
  ``` 
    delete family.father 
    delete family.mother.husband 
  ```
  hear deleting one will not be enough , we will have to delete bot 

### garbage collection internal algorithm 
- the basic garbage collection algorithm is called "mark-and-sweep"
- garbage collector takes the roots ans marks them 
- then it visits and marks all references from them 
- then it visits marked objects marks there references 
- and so until every reachable object is visited 
- all objects except marked objects are removed 

_Some of the optimizations:_

- Generational collection – objects are split into two sets: “new ones” and “old ones”. Many objects appear, do their job and die fast, they can be cleaned up aggressively. Those that survive for long enough, become “old” and are examined less often.
- Incremental collection – if there are many objects, and we try to walk and mark the whole object set at once, it may take some time and introduce visible delays in the execution. So the engine tries to split the garbage collection into pieces. Then the pieces are executed one by one, separately. That requires some extra bookkeeping between them to track changes, but we have many tiny delays instead of a big one.
- Idle-time collection – the garbage collector tries to run only while the CPU is idle, to reduce the possible effect on the execution.




### Memory Leak 
- _what is it ?_
  a memory leak can be defined as a piece of memory that is no longer being used or required by an application but for some reason is not returned to the OS 
  
- JS is a garbage collected language . The main cause for leaks in garbage collected languages are unwanted references. 

there are three types of common javaScript leaks 
- accidental global variable 
- forgotten timer callback 
- out of dom reference 
- closures 

#### accidental global variables 
- global variables are usually not garbage collected easily as they live on the top most scope
- so have to be careful not to declare variables as global 
  ```
  function foo(arg) {
      bar = "this is a hidden global variable";
  }
  // this will be same as 
  function foo(arg) {
    window.bar = "this is a hidden global variable";
  }
  ```
- in the above case incase we are handling large amount of data , the accidental global will not be garbage collected 
  causing memory leak 

#### forgotten timer callback 
- example 
  ```
  var someResource = getData();
  setInterval(function() {
      var node = document.getElementById('Node');
      if(node) {
          // Do stuff with node and someResource.
          node.innerHTML = JSON.stringify(someResource));
      }
  }, 1000);
  ```
- if the interval handler can not be collected then its dependencies can not be collected as well 
- `node` and `someResource` might be removed later at some point , but setInterval handler references them so they wont be collected 
- same for observers 
  ```
  var element = document.getElementById('button');

  function onClick(event) {
      element.innerHtml = 'text';
  }

  element.addEventListener('click', onClick);
  // Do stuff
  element.removeEventListener('click', onClick);
  element.parentNode.removeChild(element);
  ```
  though the modern browsers handle this case but it is considered good practice 


#### out of DOM reference 

- sometimes we store DOM element references in data structures 
- but if we do when these elements are removed from dom tree there reference still takes up memory 
- so we have to remove both to avoid memory leak 
  ```
  var elements = {
      button: document.getElementById('button'),
      image: document.getElementById('image'),
      text: document.getElementById('text')
  };

  function doStuff() {
      image.src = 'http://some.url/image';
      button.click();
      console.log(text.innerHTML);
      // Much more logic
  }

  function removeButton() {
      // The button is a direct child of body.
      document.body.removeChild(document.getElementById('button'));

      // At this point, we still have a reference to #button in the global
      // elements dictionary. In other words, the button element is still in
      // memory and cannot be collected by the GC.
  }
  ```
#### Closure 
- closure under the same scope share a common scope in memory 
  ```
  var theThing = null;
  var replaceThing = function () {
    var originalThing = theThing;
    var unused = function () {
      if (originalThing)
        console.log("hi");
    };
    theThing = {
      longStr: new Array(1000000).join('*'),
      someMethod: function () {
        console.log(someMessage);
      }
    };
  };
  setInterval(replaceThing, 1000);
  ```
- hear `someMethod` and `unused` share a common scope 
- every time `replaceThing` gets called `originalThings` gets the value of `theThing` and the things gets assigned with `longStr` (a very large array) and `someMethod` closure  every time 
- since `unused` has a reference of `originalThing` it does not get garbage collected 
- hear a chain of scopes form with closure , so after a a while it looks like this  
  ```
   theThing -> longStr ,someMethod - scope( unused , originalThing   )
                                               \
                                                originalThing -> theThing -> longStr ,someMethod - scope( unused , originalThing   )
                                                                                                            \
                                                                                                              originalThing  -> theThing -> longStr ,someMethod - scope( unused , originalThing   )
                                                                                                                        \ 
                                                                                                                        (.... goes on)
  ```
### Reference 
- https://javascript.info/garbage-collection
- https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/