

the operations performed on dynamo by cli/sdk/console can be categorized as 

- control plane (manage tables)
- data plane (CRUD on data)
- dynamodb stream (live events )
- transactions (ensures ACID) 



### control pane 

lets us create and manager dynamodb tables . It can also be used for index , streams and other objects that are dependent on the table 

the methods are 
- createTable
- DescribeTable 
- ListTables 
- UpdateTable
- DeleteTable 


### data plane 

#### create 
- PutItem
- BatchWriteItem 

#### read 
- GetItem
- BatchGetItem 
- Query (items /w specific partition key)
- Scan ( all items )

#### update 
- updateItem 

#### delete 
- DeleteItem
- BatchWriteItem


### examples 

> ref : https://github.com/awsdocs/aws-doc-sdk-examples/blob/main/javascript/example_code/dynamodb/ddb_query.js

- createTable 
  ```
    // Load the AWS SDK for Node.js
    var AWS = require('aws-sdk');
    // Set the region 
    AWS.config.update({region: 'REGION'});

    // Create the DynamoDB service object
    var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

    var params = {
    AttributeDefinitions: [
        {
        AttributeName: 'CUSTOMER_ID',
        AttributeType: 'N'
        },
        {
        AttributeName: 'CUSTOMER_NAME',
        AttributeType: 'S'
        }
    ],
    KeySchema: [
        {
        AttributeName: 'CUSTOMER_ID',
        KeyType: 'HASH'
        },
        {
        AttributeName: 'CUSTOMER_NAME',
        KeyType: 'RANGE'
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    },
    TableName: 'CUSTOMER_LIST',
    StreamSpecification: {
        StreamEnabled: false
    }
    };

    // Call DynamoDB to create the table
    ddb.createTable(params, function(err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Table Created", data);
    }
    });
  ```

- deleteTable 
  ```
        // Load the AWS SDK for Node.js
        var AWS = require('aws-sdk');
        // Set the region 
        AWS.config.update({region: 'REGION'});

        // Create the DynamoDB service object
        var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

        var params = {
            TableName: process.argv[2]
        };

        // Call DynamoDB to delete the specified table
        ddb.deleteTable(params, function(err, data) {
            if (err && err.code === 'ResourceNotFoundException') {
                console.log("Error: Table not found");
            } else if (err && err.code === 'ResourceInUseException') {
                console.log("Error: Table in use");
            } else {
                console.log("Success", data);
            }
    });
  ```

- putItem
  
  ```
    // Load the AWS SDK for Node.js
    var AWS = require('aws-sdk');
    // Set the region 
    AWS.config.update({region: 'REGION'});

    // Create the DynamoDB service object
    var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

    var params = {
    TableName: 'CUSTOMER_LIST',
        Item: {
            'CUSTOMER_ID' : {N: '001'},
            'CUSTOMER_NAME' : {S: 'Richard Roe'}
        }
    };

    // Call DynamoDB to add the item to the table
    ddb.putItem(params, function(err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data);
        }
    });
  ```

- deleteItem 

  ```
    var params = {
    TableName: 'TABLE',
        Key: {
            'KEY_NAME': {N: 'VALUE'}
        }
    };

    // Call DynamoDB to delete the item from the table
    ddb.deleteItem(params, function(err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data);
        }
    });

  ```
- getItem

    ```

    var params = {
        TableName: 'TABLE',
        Key: {
            'KEY_NAME': {N: '001'}
        },
        ProjectionExpression: 'ATTRIBUTE_NAME'
    };

    // Call DynamoDB to read the item from the table
    ddb.getItem(params, function(err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data.Item);
        }
    });
    ```
- deleteItem
    ```
    var params = {
        TableName: 'TABLE',
        Key: {
            'KEY_NAME': {N: 'VALUE'}
        }
    };

    // Call DynamoDB to delete the item from the table
    ddb.deleteItem(params, function(err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data);
        }
    });
    ```
- batchWriteItem 
    ```
    var params = {
        RequestItems: {
            "TABLE_NAME": [
                {
                    PutRequest: {
                    Item: {
                        "KEY": { "N": "KEY_VALUE" },
                        "ATTRIBUTE_1": { "S": "ATTRIBUTE_1_VALUE" },
                        "ATTRIBUTE_2": { "N": "ATTRIBUTE_2_VALUE" }
                    }
                    }
                },
                {
                    PutRequest: {
                    Item: {
                        "KEY": { "N": "KEY_VALUE" },
                        "ATTRIBUTE_1": { "S": "ATTRIBUTE_1_VALUE" },
                        "ATTRIBUTE_2": { "N": "ATTRIBUTE_2_VALUE" }
                    }
                    }
                }
            ]
        }
    };

    ddb.batchWriteItem(params, function(err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data);
        }
    });
    ```
- batchWriteItem // to delete 
    ```
    var params = {
        RequestItems: {
            "TABLE_NAME": [
                {
                    DeleteRequest: {
                        Item: {
                            "KEY": { "N": "KEY_VALUE" },
                            "ATTRIBUTE_1": { "S": "ATTRIBUTE_1_VALUE" },
                            "ATTRIBUTE_2": { "N": "ATTRIBUTE_2_VALUE" }
                        }
                    }
                },
                {
                    DeleteRequest: {
                        Item: {
                            "KEY": { "N": "KEY_VALUE" },
                            "ATTRIBUTE_1": { "S": "ATTRIBUTE_1_VALUE" },
                            "ATTRIBUTE_2": { "N": "ATTRIBUTE_2_VALUE" }
                        }
                    }
                }
            ]
        }
    };

    ddb.batchWriteItem(params, function(err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data);
        }
    });
    ```
- batchGetItem
    ```
    var params = {
        RequestItems: {
            'TABLE_NAME': {
            Keys: [
                {'KEY_NAME': {N: 'KEY_VALUE_1'}},
                {'KEY_NAME': {N: 'KEY_VALUE_2'}},
                {'KEY_NAME': {N: 'KEY_VALUE_3'}}
            ],
            ProjectionExpression: 'KEY_NAME, ATTRIBUTE' // things to be selected 
            }
        }
    };

    ddb.batchGetItem(params, function(err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            data.Responses.TABLE_NAME.forEach(function(element, index, array) {
            console.log(element);
            });
        }
    });
    ```
- query
    ```
    var params = {
        ExpressionAttributeValues: {
            ':s': {N: '2'},
            ':e' : {N: '09'},
            ':topic' : {S: 'PHRASE'}
        },
        KeyConditionExpression: 'Season = :s and Episode > :e',
        ProjectionExpression: 'Episode, Title, Subtitle',
        FilterExpression: 'contains (Subtitle, :topic)',
        TableName: 'EPISODES_TABLE'
    };

    ddb.query(params, function(err, data) {
        if (err) {
                console.log("Error", err);
        } else {
                //console.log("Success", data.Items);
            data.Items.forEach(function(element, index, array) {
                console.log(element.Title.S + " (" + element.Subtitle.S + ")");
            });
        }
    });
    ```
 - scan 
    ```
        const params = {
            // Specify which items in the results are returned.
            FilterExpression: "Subtitle = :topic AND Season = :s AND Episode = :e",
            // Define the expression attribute value, which are substitutes for the values you want to compare.
            ExpressionAttributeValues: {
                ":topic": {S: "SubTitle2"},
                ":s": {N: 1},
                ":e": {N: 2},
            },
            // Set the projection expression, which are the attributes that you want.
            ProjectionExpression: "Season, Episode, Title, Subtitle",
            TableName: "EPISODES_TABLE",
        };

        ddb.scan(params, function (err, data) {
            if (err) {
                console.log("Error", err);
            } else {
                console.log("Success", data);
                data.Items.forEach(function (element, index, array) {
                    console.log(
                        "printing",
                        element.Title.S + " (" + element.Subtitle.S + ")"
                    );
                });
            }
        });
    ```