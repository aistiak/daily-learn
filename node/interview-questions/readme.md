
1. what is compiled and what is interpreted language . Which on is nodejs ? 
2. how to create a simple server in nodejs ? 
3. explain module system in nodejs 
4. what is clustering and how to improve performance with it ?
5. what is callback hell ? and how to avoid it ?
6. How does nodejs handel child thread 
7. what is the difference between let , var and const ?

## compiled-vs-interpreted language 
In compiled language code is compiled for a target machine and turned into machine code 
where in Interpreted language code is not directly executed by a target machine instead it is read and executed by another program 

The javascript that nodejs runs is interpreted , it is interpreted by chromes v8 engine 

## create a simple server in nodejs 
```
var http = require('http');

http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Hello World \n');
}).listen(3000) ;

```

## define routes and middlewares 
### Refs 
- https://www.interviewbit.com/node-js-interview-questions/
- https://www.toptal.com/nodejs/interview-questions


### node js in micro level 