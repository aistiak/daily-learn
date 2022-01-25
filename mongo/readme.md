
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
1. Boolean
2. String 
3. Number 
4. Object 
5. Date 
6. Array (with indexes)
7. Null 
8. ObjectId 
9. TimeStamp
10. Binary data 

### todo : need little detail about data types 
#### some facts 

- maximum mongodb document size is 16MB 
- documents can have nesting up to 100 levels 
- we can perform regex search in mongo string data type 


### ways to connect to database 

todo

### query database 

lets assume we have a collection users

find a users named david , it will return an array (an empty array if no match is found)
```
db.users.find({name : "david"})
```
we can add pretty to make the output more formatted 
```
db.users.find({name:"istiak"}).pretty()
```
to return the first matched record we can use `findOne` , will return object if found or null if not 
```
db.users.findOne({name:"istiak"})
```

`find` returns a cursor which can be used to iterate the records 
```
const users = db.users.find({name : "istiak"})

if(users.hasNext()){
    console.log(user.next())
}
```
hear next moves cursor to the next document and returns the current document , but if the cursor is at its end , it (`next`) will throw an error so to avoid this we ensure there is a next by calling `hasNext` , it returns `true` if there is a next `false` otherwise 


all the lines below will return all the document in the collection 
```
db.users.find()
db.users.find({})
db.users.find({"non_existing_field":null})
```
> NB. a non existing field in mongo will always have a `null` value 

for `findOne` it will return only the first document in the collection 
```
db.users.findOne()
db.users.findOne({})
db.users.findOne({"non_existing_field":null})
```

##### choosing which fields to show for output 
in mongo queries can either include of exclude specific fields from query result , this is called __Projection__ , it is expressed as the second argument in `find` and `findOne` . a field can be explicitly included or excluded by setting it to 1 and 0 .

say we want to find name ang age form users collection

```
db.users.find({},{name:1,age:1})
```
>NB. for projection when one filed in  included explicitly other fields are excluded by default , and when on field is excluded explicitly all other fields will be included  by default 

#### finding distinct fields `distinct`

we can use distinct function for this 
```
db.users.distinct(`name`)
```
gets all the distinct names from the users collection 

we can also call distinct with a query condition
```
db.users.distinct('name',{
    "age" : 20
})
```
#### counting document `count`
```
db.users.count()
// > 100 
```
without a query count will not physically count the documents it will just read the metadata 
> NB. mongodb specification does guarantee that metadata count will always be accurate 

`countDocuments` returns the physical count not metadata of documents , unlike count it always requires a query parameter 
```
db.users.countDocument({}) // all document count 
db.users.countDocument({age : 20}) // conditional count 
```
`estimatedDocumentCount` returns document count by reading metadata (always) , and it does not accept any parameters 
```
db.users.estimatedDocumentCount() 
``` 

### Conditional Operators 
| operation  | symbol  | example|
|---|---|---|
|equal to| $eq| `db.users.find({"age" : {$eq : 5} })` | 
|not equal to| $ne| `db.users.find({"age" : {$ne : 5} })` | 
|greater than| $gt| `db.users.find({"age" : {$gt : 5} })` | 
|greater than or equal | $gte| `db.users.find({"age" : {$gte : 5} })` |
|less than| $lt| `db.users.find({"age" : {$lt : 5} })` | 
|less than or equal| $lte| `db.users.find({"age" : {$lte : 5} })` |  
|in| $in | `db.users.find({ "age" : {$in:[5,10,15]} })` |
|not in | $nin | `db.users.find({ "age" : {$in:[4,12,14]} })`|

### logical operators 
| operation | symbol | example |
|---|---|---|
| and | $and | `db.users.find({ $and : [ {age : 20} , {name : "istiak"} ] })` and is implicit in mongo so `db.users.find({age : 20 , name :"istiak"})` is same as above  |
| or | $or | `db.users.find({ $or : [ {age : 20} , {name : "istiak"} ] })` | 
| nor | $nor | `db.users.find({ $nor : [ {age : 20} , {name : "istiak"} ] })` returns documents that do not satisfy any of the given conditions| 
| not | $not | `db.users.find({ $not : { age : { $gt : 5 } } } )` | 


#### exx : find list of movies form movies collection where actor _Leonardo DiCaprio_ and director _Martin Scorsese_ collaborate in Drama or Crime genres 

```
# 1
db.movies.find({
    "cast : "Leonardo DiCaprio" ,
    "director" : "Martin Scorsese",
    "$or" : [ {"genres" : "crime"} , {"genres":"drama"} ]
})

# 2 
db.movies.find({
   "cast : "Leonardo DiCaprio" ,
   "director" : "Martin Scorsese",
   "genres" : {
       $in : ["crime","drama"]
   }
})


```

### Regular expression 

find movies with title that contain the word Opera 
```
db.movies.find({
    "title" : {
        "regex" : "opera"
    }
})
```
find movies with title that start with the word opera 
```
db.movies.find({
    "title" : {
        "regex" : "^opera"
    }
})
```
find movies with title that end with the word opera 
```
db.movies.find({
    "title" : {
        "regex" : "opera$"
    }
})
```
> NB. ^ is called the caret operator and $ is the dollar operator  

__performing a case insensitive search__
regex search is by default case insensitive , but when using regular expression pattern to specify options we can use `$options`

```
db.movies.find(
    {"title" : 
        {"$regex" : "Opera", $options: "i"}
    }
)
```

### Query Array 

the movies collection has a field named cast (type array) which contains list of the cast 
now to find documents where  _Charles Chaplin_ is a cast 
```
db.movies.find({
    "cast" : "Charles Chaplin"
})
// only the cast is projected in output 
```
now to find movies where _Charles Chaplin_ and _Edna Purviance_ were together 
```
db.movies.find({
    $and : [
        {"cast" : "Charles Chaplin"} ,
        {"cast" : "Edna Purviance "}
    ]
})
```

##### search array with array 

we can search array with array but in this case order will matter 

```
# 1

db.movies.find({
    "cast" : ["English","German"]
})

# 2 

db.movies.find({
    "cast" : ["German","English"]
})

// hear 1 and  2 will differ in output as it will match by order of output 

```

##### $all operator 

`$all` finds all the documents irrespective of the provided order or size

```
 db.movies.find({
     "languages" : {
         $all : ["English","French"]
     }
 })

```

#### nested object search 

nested object can be search in two ways 1. by object format 2. Dot notation format 

in object format the whole object has to match 

```
db.movies.find({
    "awards" : {
        "wins" : 1 , "nominations" : 0 , "text" : "1 win."
    }
})

// this approach will match the whole nested object 

```
dot notation search 

```
# 1

db.movies.find({
    "awards.wins" : 1
})

# 2 

db.movies.find({
    "awards.wins" : 1 ,
    "awards.nominations" : 1 ,
}) // implicit and condition on nested object 

```
> NB. nested object projection can also be done with dot notation 

#### limiting , skipping and sorting documents 

__limit__ returns limited number of results , the function accepts an integer and 
> _NB._ positive and negative numbers output the same result for limit() , but it is safe to use positive number as negative numbers cause problem with other functions such `sort` , and if the total result is less then the provided integer then all the data will be returned . 

__ex__ 
```
db.movies.find().limit(10) 
```

> _NB._ Limit does not guarantee it will return the same result every time , we will have to use `sort` for that   

__skip__ is used to exclude some documents from the result 
```
db.moves.find().skip(2) // skips the first two documents 
```

__sort__ is used to sort the documents 
```
// get movies list in sorted by title 
db.movies.find().sort({title : 1}) // sorts in ascending order
db.movies().find().sort({title : -1}) // sorts in descending order  
```
sorting can be performed in multiple fields and those fields can have different sorting order 
__ex__
```
db.movies.find().sort({title : 1 , year : -1 })
```
### pagination 

```
     var findMoviesByGenre = function(genre, pageNumber, pageSize){
          var toSkip = 0;
          if(pageNumber < 2){
              toSkip = 0;
          } else{
              toSkip = (pageNumber -1) * pageSize;
          }
          var movies = db.movies.find(
              {"genres" : genre}, 
              {"_id" : 0, "title" :1})
          .sort({"imdb.rating" : -1})
          .skip(toSkip)
          .limit(pageSize)
          .toArray()
          print("************* Page : " + pageNumber)
          for(var i =0; i < movies.length; i++){
              print(movies[i].title)
          }
}
```



## Mongoose 
Is a ORM for mongodb . It lets us define schemas and work with models . Alongside properties schemas can also have behaviors  
__database connection__

 first thing we need to do is ensure database connection
```
const mongoose = require("mongoose")

async function connect () {
    await mongoose.connect("mongodb://localhost:27017/election-db)
}
connect().catch( error => console.log(error))
``` 
__define model and schema__
```
// define schema 
const UserSchema = new mongoose.Schema({
    name : String ;
})

// define model 
const User = mongoose.model("User",UserSchema) 

// create a new user 
const user = new User({name : "istiak"})
await user.save()

// find user 
await User.find({name : /^istiak/ })
```
__schema validation__

types provided by mongoose are 
1. String
2. Number
3. Date
4. Buffer
5. Boolean
6. Mixed
7. ObjectId
8. Array
9. Decimal128
10. Map
11. Schema 

validations are defined in schema types 

```
const UserSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true 
    }
})
```
all schema types are 
1. required (boolean)
2. default (any of function)
3. select (boolean, specifies default projection for queries )
4. validate (function)
5. get (function , defines custom getters)
6. set (function , defines custom setters)
7. alias (string, defines a alias with get/set (virtual) )
8. immutable (boolean)
9. transform (function,called when toJSON or JSON.stringify document )

__middleware__

__error handling__ 

__frequently used functions__

__doing it with typescript__ 


### todo 
- insert , update 
- array operations 
- aggregation functions  
- mongoose


#### interview questions 
##### ref 
- https://www.interviewbit.com/mongodb-interview-questions/#mongodb-datatypes
- https://www.guru99.com/mongodb-interview-questions.html
- https://www.javatpoint.com/mongodb-interview-questions