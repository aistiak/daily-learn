
### Questions

1. explain the structure of objectId in mongodb 
2. what is namespace in mongodb 
3. what is sharding in mongodb
4. what is a replica set 
5. how does replication work in mongodb
6. what is a profiler 
7. what is GridFS 
8. how can we create an index in mongodb 
9. what are the advantages of mongodb
10. what are the features of mongodb 
11. what is mongod 
### ObjectId structure in mongodb
objectId is a 12-byte BJSON type , it has 
- 4 byte value representing seconds 
- 3 byte machine identifier 
- 2 byte process ID 
- 3 byte counter 

### namespace in mongodb 
It is the canonical name for a collection or index in MongoDB . The namespace is a combination of the database name  name collection name or index name 

### what is mongod 
mongod is the primary demon process for the MongoDB system . It handles data request , manages data access and performs background management operations 

### what is a replica set 
A replica set in MongoDB is a group of mongod processes that maintain the same data set . 

### what is Oplog 
the oplog is a special capped collection that keeps a rolling record of all operations that modify the data stored in database 

capped collections are fixed-sized collections that support hight-throughput operations that insert and retrieve documents based on insert order 

### How does replication work in MongoDB 

<img src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/210/original/replication_architecture.jpg"/>

- In the preceding model, the PRIMARY database is the only active replica set member that receives write operations from database clients. The PRIMARY database saves data changes in the Oplog. Changes saved in the Oplog are sequential—that is, saved in the order that they are received and executed

- The SECONDARY database is querying the PRIMARY database for new changes in the Oplog. If there are any changes, then Oplog entries are copied from PRIMARY to SECONDARY as soon as they are created on the PRIMARY node

- Then, the SECONDARY database applies changes from the Oplog to its own datafiles. Oplog entries are applied in the same order they were inserted in the log. As a result, datafiles on SECONDARY are kept in sync with changes on PRIMARY.

- Usually, SECONDARY databases copy data changes directly from PRIMARY. Sometimes a SECONDARY database can replicate data from another SECONDARY. This type of replication is called Chained Replication because it is a two-step replication process. Chained replication is useful in certain replication topologies, and it is enabled by default in MongoDB.

### what is sharding in mongoDB 
Sharding is the method for distributing data across multiple machines . 

MongoDB uses sharding to support deployments with very large data sets and highly throughput operations  

sharding cluster has 3 components 
- _shard_  each shard contains a subset of the sharded data each shard can be deployed as a replica set 
- _mongos_ acts as a query router , providing a interface between client and the sharded cluster 

- _config server_ Config servers stores metadata and configuration settings for the cluster 
### explain the process of sharding 

Sharding is the process of splitting data up across machines. We also use the term “partitioning” sometimes to describe this concept. We can store more data and handle more load without requiring larger or more powerful machines, by putting a subset of data on each machine.
In the figure below, RS0 and RS1 are shards. MongoDB’s sharding allows you to create a cluster of many machines (shards) and break up a collection across them, putting a subset of data on each shard. This allows your application to grow beyond the resource limits of a standalone server or replica set.

<img src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/204/original/sharded_client_connection.jpg?1616054864" />

### what is a database profiler 

- A database profiler collects detailed information about Database Commands executed against a running mongod instance (like - time ) . this includes crude operations as well as config and administrative commands .
- the profiler writes all the data it collects to a system.profile collection (capped / fix-sized) collection in each profiled database 
- the profiler is off by default 
- when enabled profiler has effect on database performance and disk use 
- for example an use of profiler would be to determine the time it took to perform a query on a collection 

### what is GridFS 

- GridFS is a specification for storing and retrieving files that exceed the BJSON document size limit of 16MB 

- Instead of storing the file in a single document GridFS stores the file into parts of chunks and stored each chunk in a separate document 

- GridFS uses two collections one for storing data and another for storing meta data 

### how to create an index in mongodb collection 
create index 
```
db.collection.createIndex({
    "userName" : 1
},{ // extra options 
    unique: true,
    sparse: true,
    expireAfterSeconds: 3600
})
```
remove index
```
db.collection.dropIndex("field-name")
```
__refs__
- https://docs.mongodb.com/manual/reference/method/db.collection.createIndex/
- https://docs.mongodb.com/manual/reference/method/db.collection.dropIndex/
### what are the advantages of mongodb 
- flexible document schema 
- easy horizontal scale out 
- code-native data access
    - most databases force us to use heavy wrappers like ORMs to get data into objects forms to use is programs . MongoDB decision to store and represent data in document format means we can access it from any language , in data structures that are native to that language 
    - e.g dictionaries in python , associative arrays in JavaScript , Maps in Java etc 
- change-friendly design 
- powerful querying and analytics 

### what are the features of mongodb 
- __adhoc queries__ in mongo we can search by field , range query and also support regular expression searches (adhoc means for specific purpose not a generalized solution )
- __indexing__ you can index any field in the document 
- __Replication__ mongo supports master salve replication through _replica sets_ 
- __Distribution of data__ mongo can distribute data across many machines through sharding  
- __Load Balancing__ it has an automatic load balancing configuration because of data placed on shards 
- __Map Reduce__ supports Map Reduce aggregation  tools  

# refs 
- https://www.interviewbit.com/mongodb-interview-questions/#mongodb-datatypes