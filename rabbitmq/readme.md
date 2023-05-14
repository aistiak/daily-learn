
# Rabbit MQ 

- what is rabbit mq 
- basic concepts 
- simple pub / sub poc 
- simple delayed message poc 

## refs 
- https://www.cloudamqp.com/blog/part1-rabbitmq-for-beginners-what-is-rabbitmq.html

### what is rabbit mq 
- Rabbit MQ is a message queueing software also known as message broker or queue manager 
- it is a software where queues are defined to which applications connect in order to transfer a message or receive a message 
- a message can include any king of information like process or task info or just a simple text message or a JSON object 
- queueing manager stores the message until receiving application connects ans takes a message of the queue 

### concepts 
1. __Producer:__ Application that sends the messages.
2. __Consumer:__ Application that receives the messages.
3. __Queue:__ Buffer that stores messages.
4. __Message:__ Information that is sent from the producer to a consumer through RabbitMQ.
5. __Connection:__ A TCP connection between your application and the RabbitMQ broker.
6. __Channel:__ A virtual connection inside a connection. When publishing or consuming messages from a queue - it's all done over a channel.
7. __Exchange:__ Receives messages from producers and pushes them to queues depending on rules defined by the exchange type. To receive messages, a queue needs to be bound to at least one exchange.
8. __Binding:__ A binding is a link between a queue and an exchange.
9. __Routing key:__ A key that the exchange looks at to decide how to route the message to queues. Think of the routing key like an address for the message.
10. __AMQP:__ Advanced Message Queuing Protocol is the protocol used by RabbitMQ for messaging.
11. __Users:__ It is possible to connect to RabbitMQ with a given username and password. Every user can be assigned permissions such as rights to read, write and configure privileges within the instance. Users can also be assigned permissions for specific virtual hosts.
12. __Vhost, virtual host:__ Provides a way to segregate applications using the same RabbitMQ instance. Different users can have different permissions to different vhost and queues and exchanges can be created, so they only exist in one vhost.

#### Exchanges 
- messages are not directly published to the queue , instead the producer sends messages to an exchange 
- An exchange is responsible for routing the message to different queues based on bindings and routing keys 
- Bindings must be created form exchange to queues 
- A binding is a link between queue and an exchange 
- there are several types of exchanges 
- type of exchange must be specified at the time of creation 
- messages are routed differently based on exchange types 
- Message stays in the queue until handled by a consumer 


#### Types of Exchange 
1. __Direct:__ the message is routed to the queue whose binding key exactly matches the routing key of the message 
2. __Fanout:__ a fanout exchange routes messages to all of the queues bound to it 
3. __Topic:__ the topic exchange does a wildcard match between the routing key and the pattern specified in the binding 
4. __Headers:__ Headers exchanges use the message header attribute for routing 

### running RabbitMQ in docker 
- docker run -d --hostname my-rabbit --name some-rabbit  -p 15672:15672 -p 5672:5672 rabbitmq:3-management 
- docker run -d --hostname my-rabbit --name some-rabbit -e RABBITMQ_DEFAULT_USER=user -e RABBITMQ_DEFAULT_PASS=password -e RABBITMQ_DEFAULT_VHOST=my_vhost -p 15672:15672 -p 5673:5673 rabbitmq:3-management 
- docker exec -it <container-name> bash (/bin/bash) 
    - rabbitmq-plugins enable rabbitmq_delayed_message_exchange
### Simple Pub-Sub 
- https://www.cloudamqp.com/blog/part2-2-rabbitmq-for-beginners_example-and-sample-code-node-js.html
- https://geshan.com.np/blog/2021/07/rabbitmq-docker-nodejs/

### Delay Message 
- https://blog.rabbitmq.com/posts/2015/04/scheduling-messages-with-rabbitmq
- for delayed queue most of have to define exchange 


## commands 

docker run --name some-rabbit -p 5672:5672 -p 15672:15672 -d aistiak/delayed_rabbit