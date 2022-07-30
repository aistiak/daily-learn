## Crypto module 

- what is crypto module 
- what are the basic functions 
- where do we use them or ues cases 


### what is crypto module 
it provides cryptographic functionality that includes a set of wrappers for open SSLs hash HMAC , cipher / decipher , sign and verify functions 

#### what is openssl 
it is a software library for applications that secure communication over computer networks , is widely used by computer servers 

#### what is HMAC 
it stands for Hash based message authentication code , it is a process for applying a hash algorithm to both data and secret key that results in a single final hash 


```
    const crypto = require("crypto)
    const secret = 'abc123'
    const hash = crypto.createHmac('sha256','secret')
                    .update('Hello there !')
                    .digest('hex')
    console.log(hash)

```

### cipher / decipher example 


```

    var crypto = require('crypto')
    , key = 'salt_from_the_user_document'
    , plaintext = 'password'
    , cipher = crypto.createCipher('aes-256-cbc', key)
    , decipher = crypto.createDecipher('aes-256-cbc', key);
    
    cipher.update(plaintext, 'utf8', 'base64');
    var encryptedPassword = cipher.final('base64')

    decipher.update(encryptedPassword, 'base64', 'utf8');
    var decryptedPassword = decipher.final('utf8');

    console.log('encrypted :', encryptedPassword);
    console.log('decrypted :', decryptedPassword);

```


### sign and verify 

- The crypto.verify()  is a method of the inbuilt module of node.js crypto that is used to verify the signature of data that is hashed using a different kind of hashing functions Like SHA256 algorithm etc.

NB. are public and private keys interchangeable

```

    // Importing Required Modules
    const crypto = require('crypto');
    const buffer = require('buffer');
    
    // Creating a private key
    const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
        modulusLength: 2048,
    });
    // Using Hashing Algorithm
    const algorithm = "SHA256";
    
    // Converting string to buffer
    const data = Buffer.from("I Love GeeksForGeeks");
    
    // Sign the data and returned signature in buffer
    const signature = crypto.sign(algorithm, data , privateKey);
    
    // Verifying signature using crypto.verify() function
    const isVerified = crypto.verify(algorithm, data, publicKey, signature);
    
    // Printing the result
    console.log(`Is signature verified: ${isVerified}`);

```


### refs 
- https://gist.github.com/Vitsaus/3798537
- https://www.geeksforgeeks.org/node-js-crypto-verify-function/  