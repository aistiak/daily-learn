
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
- nodejs core modules ( http, crypto etc.) 
    - ref : https://www.w3schools.com/nodejs/ref_modules.asp
- cluster module for scaling 
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




### using cluster module for scaling 
- nodejs applications are single threaded , meaning the application runs on a single thread which is in a single process 
- so if we have a multi core cpu the full potential of out cpu wont be utilized 
- we can work around this with cluster module and scale out application 
- even with single cpu cluster module will provide with zero down time as if single instance goes down another instance will start running 
- a simple server 

    ```
    const express = require('express')

    const app = express() 

    app.get('/',(req,res) => {
        for (let i = 0 ; i < 1e8 ; i++) {
            // psudo long running task
        }
        res.send('ok')
    })

    app.listen(3000, () => console.log(`server running ... `))

    ```
- with cluster module 

    ```
    const express = require('express')
    const cluster = require('cluster')
    const os  = require('os')
    const app = express()

    const numberOfCpu = os.cpus().length 

    app.get('/',(req,res) => {
        for (let i = 0 ; i < 1e8 ; i++) {
            // psudo long running task
        }
        res.send(`ok from ${process.pid}`)
    })

    if(cluster.isMaster) {
        for ( let i = 0 ; i < numberOfCpu ; i++) {
            cluster.fork()
        }
        cluster.on('exit',(worker,code,signal) => {
            console.log(`worker ${worker.process.pid} died`)
        })

    }else {

        app.listen(3000, () => console.log(`server running for instance ${process.pid}... `))
    }

    ```

    - I came around some un answered questions of mine while learning this topic 
        - how to properly process cpu intensive tasks in nodejs 
        - why is serving static file from express not a good idea why is it best if served from file directory , what is the difference hear 
        - https://stackoverflow.com/questions/70595192/bull-js-blocks-express-api-requests-until-jobs-finish 
        - https://blog.logrocket.com/asynchronous-task-processing-in-node-js-with-bull/
        - https://stackoverflow.com/questions/70595192/bull-js-blocks-express-api-requests-until-jobs-finish

        
### what is libuv 
- libuv is the core engine that powers nodejs 
- libuv provides support for asynchronous I/O operations 
- it is a C-based library primarily created for nodejs and also used by Luvit (lua ), julia , pyuv ( python)  


### dependencies of nodejs , and what is how what ?

there are six dependencies 

1. V8 
2. libuv 
3. llhttp 
4. c-ares 
5. OpenSSL 
6. zlib 