
## using raabitmq with nodejs

- what is rabbitmq
- what are its basic features
- what are its use cases 
- rabbitmq ach and protocols used 
- how to use it with nodejs
- best practices


## what is rabbitmq 
rabbitmq is a message broker 

## features of rabbitmq 

__1. Message queue__ 
 
__2. Different protocols and APIS__ 

such as AMQP , MQTT , STOMP 

__3. pub/sub model__ 

__4. message acknowledgement__ 

-  ensures reliable message delivery 
- consumers can explicitly acknowledge the reciption and processing of message 
- rabbitmq can requeue unackowledged messages in case of failure 


__5. Message Persistence__

it allows messages tobe persisted on disk ensuring message delivery incase of system failure 
 
__6. Message Routing and filtering__ 

can filter and route messaged to queues based of attribute 

__7. Clustering and high availability__

multiple nodes can work as a single logical broker 

__8. Flexible routing and exchange types__ 

rabbitmq has different type of exchange types 
1. direct 
2. topic
3. headers
4. fanout exchanges 

__9. Management and monitoring__

has a web based management dashboard called Rabbitmq Management plugin 

__10. Extensibility and plugin system__ 

has plugin system that allows extending functionalities 

## Rabbitmq use cases 

__1. asyncronus messaging__

__2.Task Queue__

__3.Event Driven Architechture__

__4.Distributed System__

__5.IOT__

RabbitMQ's lightweight protocol, such as MQTT, makes it suitable for IoT applications. It can handle the high volume of messages exchanged between devices and backend systems, ensuring reliable and efficient communication in IoT ecosystems.

__7.Remote Procudure Call__

__8.Scaleable Data Processing__

RabbitMQ's ability to handle high message rates and distribute workloads makes it suitable for scenarios that involve processing large amounts of data, such as real-time analytics, log processing, and data streaming.


## Rabbitmq Architechture and protocols 
> todo , discuss basic arch , and protcols , brif of when to use what protocol and how to i specify protocols i will be using 


# other blogs related to rabbitmq
- different types of exhanges in rabbitmq
- different protocols and use cases in rabbitmq 
- clustering 
- using as task queue and message queue 
- rest vs rpc 



