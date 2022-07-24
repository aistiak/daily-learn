# SSL , TLS etc
###### tags: `learning` `SSL` `TLS` `encryption`

- TLS is a modified versino of SSL 
- TLS  was developed by the Internet Engineering Task Force (IETF) as an improvement on SSL;
- the public private kye strategy is used for encryption in many places like :- server-client secure communication(https) , vpn , ssh etc 
- RSA algorythm is usually used to generate key-pairs 
```
                                 PKI
                                  |
                 _________________________________
                /                 |                \
                CA              Public         Private
                                 key             key 
```

- certificate authoritiy is an entity that hands out certificates 
- the certificates certify the validity of the asymetirc key pairs 


### ssh working flow 
- the public key is on the server 
- private is on the client 
- the server encrypts a word/phrase with public key and sends to the client 
- the client decrypts it with private key and sends it back to the server
- if the decrypted word is correct then a ssh-session is established else not 
- ssh-copy-id utility can be used to copy public key to server 


### what is the relation of certificate and public / private key 

The owner of the key pair makes the public key available to anyone, but keeps the private key secret. A certificate verifies that an entity is the owner of a particular public key.



