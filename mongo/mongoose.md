
## Mongoose 
Is a ODM ( Object Data Modeling ) library for mongodb . 
- It lets us define schemas and work with models . Alongside properties schemas can also have behaviors  
- manages relationship between data , provides schema validation 
- translate object in to represent those object in mongodb 

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
middleware in mongoose are also known as pre and post hooks, they are passed control during execution of asyn functions 

different types of middleware are 
1. Document middleware 
2. Model middleware 
3. Aggregate middleware 
4. Query middleware 

__docs__  https://mongoosejs.com/docs/middleware.html

__transaction__
Transactions in mongodb allows us to execute multiple operations in isolation and undo potentially undo all if one of them fails 

__ex__

```
import mongoose from 'mongoose'

// using default connection
const session = await mongoose.startSession() 

await session.withTransaction(() =>{
    // code hear 
    // 
})

session.endSession() // all the changes will be committed 
```

__frequently used functions__

`find` ,`findOne` ,`update`, `updateOne`, `delete`, `deleteOne` 
