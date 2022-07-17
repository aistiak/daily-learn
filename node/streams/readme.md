
# all about nodejs streams 

- what are streams 
- why do we need them 
- classification and methods 
- use cases 
- examples 


### what is stream 
- streams are collection of data just like arrays or string , the difference is that stream might not be present all at once and they don't have to fit in memory 
### why do need them 
- this makes streams working with data that are large in size or are coming from an external source chunk at a time 
- streams make reading or writing big data easy 

### classification and methods 
- there are four fundamental stream types in node js 
    - Readable (abstraction for data source )
    - Writeable (abstraction for data destination )
    - Duplex (both readable and writeable ex : tpc)
    - Transform (duplex stream used to modify data)

    ### `pipe` method 
    - this is used to chaing /pipe output form one stream to another 
    ```
    ex : 1 
    readableSrc.pipe(writableDest);

    ex : 2 
    readableSrc
        .pipe(transformStream1)
        .pipe(transformStream2)
        .pipe(finalWrtitableDest);
    ```
    
    ```
    a.pipe(b)
    .pipe(c)
    .pipe(d);

    // Which is equivalent to:
    a.pipe(b);
    b.pipe(c);
    c.pipe(d);

    // Which, in Linux, is equivalent to:
    // $ a | b | c | d

    ```

### stream events 

- Besides reading from a readable stream source and writing to a writable destination pipe method also autometically manages a few things along the was 
- for example it handles errors , end-of-file , and the case when one stream is slower or faster than the other

- However streams can also be used with custom events 

```
// readable.pipe(writable)

readable.on("data", chunk => {
  writable.write(chunk);
});

readable.on("end", () => {
  writable.end();
});

```

| |Readable stream | writeable stream |
| --- | --- | ---- |
| Events | data, end, error, close, readable | drain, finish, error, close, pipe, unpipe |
| Methods | pipe(), unpipe(), wrap(), destroy() , read(), unshift(), resume(), pause(), isPaused(), setEncoding()| write(), destroy(), end() , cork(), uncork(), setDefaultEncoding() |



- **The most important events on a readable stream** are , The `data` event, which is emitted whenever the stream passes a chunk of data to the consumer ,The `end` event, which is emitted when there is no more data to be consumed from the stream.

- **The most important events on a writable stream** are , The `drain` event, which is a signal that the writable stream can receive more data. The `finish` event, which is emitted when all data has been flushed to the underlying system.

### use cased 
- transform streams can be used to zip or transform file / string , object 
- sending large response from server 
- uploading large files to server in chunks and socket event  with streams 
- many of the build in nodejs libraries use stream ex : http , zlib , crypto , child process , process.stdin

## Refs
- https://jscomplete.com/learn/node-beyond-basics/node-streams