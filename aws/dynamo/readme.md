## DynamoDB 

- Table , Item & attribute
- Primary keys (  partition key , partition and sort key  )
- Secondary Index (Global , Local)
- DynamoDB Streams (live updates)


### primary keys / primary index 

- when creating a table in addition to table name , the primary key must be specified 
- dynamo supports two different types of primary keys (i) partition key (ii) partition key and sort key / composite primary key  
- dynamodb uses partition key as the value for a hash function which outputs the partition of the physical location of the record 
- for composite keys ,many items can have the same partition key but they must have different sort keys
- partition key determines the location of the records and sort key determines the sort order of them


### secondary index 

> we can create one or more secondary index for a table 
there are two types of secondary index 

- global secondary index - an index with partition key and sort key that can be different from those of the table 

- local secondary index - an index that has same partition key as table but different sort keys 

- each table in dynamodb can have up to 20 global and 5 local secondary indexes 


### dynamo streams 

it is an optional feat. that allows us to capture data modification events in dynamodb table 



## dynamo single table design

### framework 

// work 7 days for algesoft can find it there 