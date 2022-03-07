
- what is IAM 

- how does it work 

- what is `arn`


### what is IAM 

- the full form of IAM is Identity Access Management 
- it is a permission system that regulates access to aws resources (who can access what)
- IAM allows to assign permissions to group of users or even specific user
- IAM can easily integrate with other identity technologies such as Microsoft ActiveDirectory 



### how does it work 

- IAM has  key concepts 
    - Users 
    - Groups 
    - Roles 
    - Policies / Permissions 

- __Users__  are specific individuals , can receive personal logins , username password to login to dashboard and access services defined in their assigned permission , secret key and id to connect with a client link aws-sdk 

- __Groups__ is collection of user . 

- __Roles__ collection of policies , Ex : DB Read , DB Write . can be assigned to users 

- __Policies__ low level permission to resources . there are two types of policies allow and deny
    example of a policy 
    ```
    {
        "Version" : "2012-10-17" ,
        "Statement" : [ // statement holds the content of the policy 
            {
                "Sid" : "VisualEditor_0" , // this is identifier , can be anything 
                "Effect" : "Allow" , // "Allow" or "Deny"
                "Action" : [ // specific permissions 
                    "dynamo:Scan" ,
                    "dynamo:query" 
                ],
                "Resource" : "arn:aws:dynamodb:us-east-1:32423423312:table/Transaction" // if `*` gives access to all dynamodb tables 
            }
        ]
    }
    ```
- Best practices are 
    - use least privilege model (don't allow )
    - exercise caution when modifying policies , as it might cause problem / bug for applications that were already using it 



### ARN

- ARN are unique identifiers given to each and every resource in aws , for example an ec3 instance , a vpc , dynamodb table , s3 bucket / object 
- the syntax of arn is 
    ```
    arn:partition:service:region:account-id:resource 
    ```
    ```
    arn:partition:service:region:account-id:resourceType/resource 
    ```
    ```
    arn:partition:service:region:account-id:resourceType:resource 
    ```

- components
    - __arn__ is a keyword and an identifier will always start with it 
    - __partition__ is a logical place where aws resources reside in . for standard region it's `aws` , for other regions it's `aws-in` (india) , `aws-bj` (Beijing) etc 
    - __service__ identifies  the service eg. S3 , IAM , RDS , EC2 etc  
    - __region__ is where aws resources reside in . eg . for North Virginia its "us-east-1" 
    - __account-id__ is numeric id of the account which owns the aws resource 
    - __resource__ / __resourceType/resource__ / __resourceType:resource__
        
        eg.
        ```
        arn:aws:ec2:region:account-id:vpc/vpc-id 
        ```