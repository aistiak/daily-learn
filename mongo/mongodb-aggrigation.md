## aggregation pipeline 

An aggregation pipeline consists of one or more stages that process documents 

- each state performs an operation on the input document . For example a stage can filter documents ,
group documents , calculate values
- The document that are output from one stage are passed to next stage 
- An aggregation pipeline can return results for groups of documents . For example return the total , average , maximum 
and minimum values . 

#### understanding aggregation pipeline and use cases 

lets say we have a collection name orders 

```
db.purchase_orders.insertMany([

    {product : 'toothbrush' , total : 4.75 , customer : 'Mike' } ,
    {product : 'guitar' , total : 199.99 , customer : 'Tom' } ,
    {product : 'milk' , total : 11.33 , customer : 'Mike' } ,
    {product : 'pizza' , total : 8.50 , customer : 'Karen' } ,
    {product : 'toothbrush' , total : 4.75 , customer : 'Karen' } ,
    {product : 'pizza' , total : 4.75 , customer : 'Dave' } ,
    {product : 'toothbrush' , total : 4.75 , customer : 'Mike' } ,
    
])

```




case-1
> find out how many toothbrushes were sold

```
db.purchase_orders.count({product:'toothbrush'})
// 3 
```
case-2
> find list of all products sold 

```
// distinct will return all the distinct products in the collection 

db.purchase_orders.distinct("product")

// ["toothbrush","guitar","milk","pizza"] 

```

case-3
> find the total amount of money spent by each customer 

```
db.purchase_orders.aggregate(
    [
        { $match : {} } , // filter, this one matches every entry 
        { $group : {_id: "$customer", total : { $sum: "$total" }}}
    ]
)

// { "_id" : "Dave" , "total" : 4.75 }
// { "_id" : "Karen" , "total" : 13.25 }
// { "_id" : "Tom" , "total" : 199.99 }
// { "_id" : "Mike" , "total" : 20.83 }

```
case-3
> find how much money was spent on each product 

```
db.purchase_orders.aggregate(
    [
        { $match : {} } , // filter, this one matches every entry could also be like this { $match : { customer : {$in : ["Mike","Karen"]}}}
        { $group : {_id: "$product", total : { $sum: "$total" }}} ,
        { $sort : {total: -1} } // sort by total in descending order 
    ]
)

// { "_id" : "pizza" , "total" : 13.25 }
// { "_id" : "milk" , "total" : 11.33 }
// { "_id" : "guitar" , "total" : 199.99 }
// { "_id" : "toothbrush" , "total" : 14.25 }

```

case-4
> combining collections 

```
// two collections can be combined with $lookup state 
// hear userInfo collection in joined with address collection with contact_name / name as pivot 
db.userInfo.aggregate([
    { $lookup:
        {
           from: "address",
           localField: "contact_name",
           foreignField: "name",
           as: "address"
        }
    },
    { $match : { ... }} ,
    { $group : { ... }} ,
    { $sort  : { ... }}
]).pretty();

```
#### list of aggregation pipeline stages 

https://www.mongodb.com/docs/manual/reference/operator/aggregation-pipeline/

## aggregation pipeline limits 

aggregate command has the following limitations 

- Result size 
    - as we know mongodb documents have size limit of 16mb , if this limit exceeds while returning result it product an error 
    - the limit only applies to returned document , size may exceed during processing 
- Number of Stages 
    - mongodb 5.0 limits the stages for a single pipeline to 1000 

- Memory Restrictions 
    - each individual pipeline stage has a limit of 100MB of RAM , if this limit exceeds mongodb produces and error 
    - for some pipeline stages more memory can be arranged by `allowDiskUse` option 
    - `$search` aggregation is not limited to 100MB RAM because it runs in a separate process 
