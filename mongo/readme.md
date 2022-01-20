
- basics
- mongoose 
- aggregation functions  
- when to use mongo for a project and when to use mysql  
- interview questions 



# Basics 
- mongo db is a NOSQL database system 
- it follows ACID properties 
- it is suitable for un-structured data ,fast retrieval and horizontal scaling purpose 
- suitable for frequently changing database schema 
- mongo stored data in a json like format bjosn (binary json)
- mongo deployment models are 
    1. standalone (single machine )
    2. Replica Set  ( replicated data among multiple machines)
    3. Sharded (stores data in a distributed manner among multiple machines)


#### valid JSON data types are
1. String
2. Number 
3. Boolean 
4. Object 
5. Array 
6. Null 
there are no Date types in JSON 

mongo store data in BJSON which is not human readable 

#### BJSON compared to JSON 
- BJSON occupies less space and has faster retrieval compared to JSON 
- BJSON store some meta information which makes data parsing and retrieval faster 
- it has ordered arrays , every element has an index 
- BJSON provides many additional data types such as 
Dates , integers , double , byte array etc 


#### mongodb elements 
- Database 
- Collection 
- Document 

> in comparison to RDBMS collections are like tables and Documents are like rows , but collections are much more flexible and suitable for complex data structures for example we can store a nested object in a collections document but to do that on a RDBMS we need another table to store the nested object and format it accordingly 


#### mongo db data types are 
- String 
- Number 
- Object 
- Array (with indexes)
- ObjectId 
- Boolean
- Null 
- Date 
- TimeStamp
- Binary data 

### todo : need little detail about data types 
#### some facts 

- maximum mongodb document size is 16MB 
- documents can have nesting up to 100 levels 
- we cam perform regex search in mongo string data type