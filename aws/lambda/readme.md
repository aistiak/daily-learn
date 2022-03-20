
- what is a lambda function 
- create a basic lambda function 
    - from aws console 
    - on your desktop (zip and upload) 
    - as a container image 
- invoking lambda 
     - from cli
     - from sdk 
     - with api-gateway 



### creating a lambda functions 

a lambda function can be created in two ways 
- from web console 
- written locally and upload as zip using aws sdk 
- as a container image 


### invoking lambda from api-gateway 
using lambda proxy integration a lambda function can receive the entire http request instead of the just the request body and also set http response 
- create an api 
- create a resource under the api 
- create a method under the resource 
- select integration type lambda , and select the lambda function , save 


### Serverless framework 

- serverless framework make all these manual tasks , like creation function , zipping , uploading , creating api and attaching the function , using authorizer for api etc easy just by setting up a config file 
- create a typescript serverless project 
    ```
    sls create --template aws-nodejs-typescript 
    ```