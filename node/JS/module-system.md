## javascript module system 


- what is js module system 
- how many are there ? and why are there more then one 
- what are the differences among them 


### facts
- js did not have module untill es6
- nodejs uses commonjs module 

### module system 

- as our application grows we want to split out code to multiple files , the files are known as modules 

### typs of module 
since js was without supports of module for a very long time , the community invented many ways to implement modules 

- AMD ( one of the most ancient module systems )
- CommonJS ( module system created for nodejs server ) 
- UDM (common module system compatible with both AMD and CommonJS )


> since es6 has module support it is more relavent to use it , nodejs by default supports commonjs module but has experimental support for es6 module , to use es6 modules we can set `"type" : "module"` in package.json or rename the file extension as `.mjs` 


