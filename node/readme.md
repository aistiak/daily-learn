
- architecture
    - node js arch components  
    - client side js arch 
- when to use and when not to use node for a project 
- jwt auth
- oauth / oauth2  
- TTD 
- interview frequent questions 
- nodejs dependencies 
- what is libuv 
- nodejs core modules ( http, crypto) 
- node version difference ( 14 ,16 ,17 )

### how is node different from other frameworks 
first of all node is a runtime environment used to run js code in server side . 
nodejs does all the sync stuff in a single thread and passes async stuff to background karnel thread , so it can take on many incoming request at once on a single thread (main thread) . 
where other language frameworks spawn a new thread for every incoming request , but the hosting server has limited number of threads available . 
So node can handel millions of requests at once but others are dependent of the server thread limit . 

node is suitable for I/O intensive stuff but not CPU intensive tasks as it blocks the main thread 

_example I/O tasks are_

- accessing file system 
- making api call on network 
- accessing database 

_example of CPU intensive tasks are_

- video processing 
- training ML models 
### feats of nodejs
- event driven 
- non blocking I/O
- asynchronous by default   
### arch component and diagrams 

components 
1. event queue 
2. event loop * 
3. thread poll 
    - worker threads 

__flow__ 

- an incoming request in sent to the event queue , 
- event loop takes it from the queue and processes it 
- if the request/event has async stuff in it event loop hand it over to the thread pool to run in background thread ,
- when the work in background thread finishes the event is again added to the queue and from there again taken by the event loop to do the sync. stuff 
