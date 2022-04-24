- we can load test main.js and main-cluster.js with `loadtest` package 

```
// we will be sending 1000 requests with concurrency of 100 
// for cluster 

loadtest -n 1000 -c 100 http://localhost:3000 

// this took 4.5 sec time in total with 209 requests per second 


// for regular server with took 26 seconds with 29 requests per second 

```