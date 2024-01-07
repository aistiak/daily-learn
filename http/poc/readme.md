

# http server 
## server with c (setup phase )
1. define server socket with file descriptor 
2. define server address 
3. bind socket and address 
4. listen of socket 
5. accept incoming connections on client file descriptors on a loop 

## inside the loop (serving phase)
1. accept a connection 
2. get a client connection 
3. read from client connection 
4. write to the client connection 
5. close the client connection 




# http client 
1. define client socket 
2. define server address 
3. connect socket with server 
4. send headers 
5. send body 
6. receive bytes 
7. close connection 
