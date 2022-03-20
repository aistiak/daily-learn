
- what is amazon s3
- basic use cases
- code examples
    - put object in bucket
    - remove object from bucket


### what is it 

s3 is a simple storage service provided by amazon 

### s3 components 
1. Buckets
2. Objects
3. Keys
4. S3 Versioning
5. Version ID
6. Bucket policy
7. S3 Access Points
8. Access control lists (ACLs)
9. Regions
10. Buckets
### basic use cases 
- storing image , videos , files as object within buckets with private / public access 


#### code examples 

storing object in s3 

```
const AWS = require('aws-sdk) 
const s3 = new AWS.S3() ;
const putObject = (myBucket, key, body, contentType) =>
  s3.putObject({
    Bucket: myBucket,
    Key: key,
    Body: body,
    ContentType: contentType
}).promise()

```


removing object from s3 

```
const AWS = require('aws-sdk) 
const s3 = new AWS.S3() ;
const deleteObject = (myBucket, key) =>
  s3.putObject({
    Bucket: myBucket,
    Key: key,
}).promise()

```