
## REST VS RPC 

> todo: format the text in simple lang and add things necessary 


REST (Representational State Transfer) and RPC (Remote Procedure Call) are two different architectural styles for designing and implementing communication between distributed systems. Here are the key differences between REST and RPC, along with the advantages and disadvantages of RPC over REST:

1. Communication Style:
   - REST: REST is an architectural style that uses HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources identified by URLs (Uniform Resource Locators). It is centered around resource-oriented communication and emphasizes statelessness.
   - RPC: RPC is a communication protocol that allows a client to invoke methods or procedures on a remote server as if they were local method calls. It is based on the concept of remote invocations and typically uses protocols like JSON-RPC or gRPC for data encoding and transmission.

2. Interface Design:
   - REST: REST interfaces are typically designed around resources, using nouns (e.g., /users, /orders) as endpoints. It leverages HTTP verbs and status codes to indicate the desired operation and outcome.
   - RPC: RPC interfaces are designed around remote methods or procedures, using method names (e.g., getUser(), createOrder()) to represent actions. The focus is on invoking specific operations on the server.

3. Data Representation:
   - REST: REST commonly uses JSON or XML for data representation, allowing for flexible and human-readable data structures.
   - RPC: RPC can use different data encodings and serialization formats, such as JSON, Protocol Buffers, or XML-RPC, depending on the specific RPC protocol being used.

Advantages of RPC over REST:
- Simplicity: RPC provides a more straightforward programming model since it resembles local method invocations. Developers can focus on the logic of the remote methods without worrying about resource-oriented design.
- Performance: RPC typically has lower overhead compared to REST due to its direct method invocation. It can be more efficient for scenarios where fine-grained control and low latency are important.
- Tighter Coupling: RPC enables tighter coupling between the client and server because it exposes remote methods explicitly. This can be advantageous when both the client and server are developed together as a cohesive unit.

Disadvantages of RPC over REST:
- Complexity of Interface Versioning: RPC can be more challenging to version and evolve compared to REST, as changes in method signatures or protocols may require updates on both the client and server sides.
- Lack of Uniformity: RPC protocols often lack a standardized set of conventions, unlike REST, which benefits from well-defined principles and guidelines.
- Compatibility across Technologies: REST is more universally supported by various programming languages and frameworks, while RPC protocols may have language-specific bindings and limited interoperability.

The choice between REST and RPC depends on the specific requirements of the system, the desired level of coupling, and the trade-offs between simplicity, performance, and interoperability. Both approaches have their strengths and weaknesses, and the decision should consider factors such as the nature of the system, team expertise, and long-term scalability needs.