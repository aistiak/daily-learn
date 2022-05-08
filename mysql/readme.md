# MYSQL 
## all about mysql 

## index 
-   [ACID/file vs datbase](#ACID-property)
-   [database encoding](#Database-encoding) 
-   [command line](#mysql-command-line)
-   [Mysql Engines](#mysql-engine) 
    - differnet types of engines 
-  Master Slave concept 
    - what is master salve why do we need it 
-  [indexing](##indexing) 
    - [what is indexing](#what-is-indexing-?) 
    - [how does it work](#how-does-indexing-work-?)
    - what are the [advantage](#advantages-of-indexing) and [disadvantages](#disadvantages-of-indexing) 
-  Stored Procedure 
    - what is it 
    - how to use it 
    - why use it 
-  function
-  triggers 
-  cursor 
-  [transaction](#database-transaction) 
-  prepared statement 
-  database security 
    - sql injection 
- [joining](#sql-joining)
- [table locking](#mysql-table-locking)
- [view / virtual table](#virtual-table)
- [mysql data types](#mysql-data-types)
- [point in time recovery ](#point-in-time-recovery)
- [mysql vs mariadb](#mysql-vs-mariadb)
- Database Normalization 
- What are DDL , DML , DQL 
- Interview Questions 


# prep process 
- w3School basic documentations with example 
- interview bit problem solve (time consuming)
- ACID / procedure / stored function / master-salve etc structural/common stuff 
- Interview Problems go through 

## ACID property


## indexing 

### what is indexing ?
> are used to quickly locate data in a table without the need of going through every row a a time 
### how does indexing work ?
>* Indexing is a way of sorting a number of records on multiple fields. 
>* Creating an index on a field in a table creates another data structure which holds the field value, and a pointer to the record it relates to. 
>* This index structure is then sorted, allowing Binary Searches to be performed on it.
### advantages of indexing
> search operation is very fast 
### disadvantages of indexing
>* create and update takes longer as index has to be updated 
>* another to indexing is that these indices require additional space on the disk since the indices are stored together in a table using the MyISAM engine, this file can quickly reach the size limits of the underlying file system if many fields within the same table are indexed.
#### references 
- https://stackoverflow.com/questions/1108/how-does-database-indexing-work
### cursor
>* A cursot holds the rows returned by a sql statement . The set of rows a cursor holds is called active set 
>* a cursor can be named to be reffered in programm to fetch and process the rows returned by the sql statement  one at a time  .
>* A cursor keeps track of position in the result and allows us to perform multiple operations row by row
>* it is requently used in [stored procedures](#stored-procedure)  

## stored procedure 

## triggers
* trigger is a special type of stored procedure that executes when some event occurs 
 
## security 
### how to prevent sql injection ?
* prepared statements and stored procedures can be used 

### mysql engine 
#### what is a mysql engine ?
> engins or storage engines in mysql are __components__ that handel sql operation for different table types 
> Mysql servers use pluggable storage engine architecture thar enables storage engine to be loaded into and unloaded from a running mysql server
### typs of mysql engines 
> by default mysql 5.7 supports __10__ typs of engines 
> 1. InnoDB 
> 2. Myslam
> 3. Memory
> 4. CSV 
> 5. Archive
> 6. Blackhole 
> 7. NDB 
> 8. Merge
> 9. Federated
> 10.Example
> to see list of them in mysql console `show engines\g`
> 
> **InnoDB :** in mysql 5.7 this is default 
>  - full ACID complience 
>  - commit , rollback and crash-recovery
>  - row-level locking
>  - FORIGEN KEY referential-intrigrity constrain 
>  - increase multi-user cincurrency (no locking read)
>  
>  **MyISAM :** 
>  - full text search indexes 
>  - table level locking 
>  - lack of support for transaction
>  
### all about mysql versions 

### what are the mysql server components ?


### test text 

## mysql-command-line
 **login to mysql from termial**
 
 lets say username is `root` and password is `secret`
 `mysql -r root -psecret`
 
 **export db from terminal**

`mysqldump -u root -psecret db-name > sql-file.sql` 
 
 **export without data (just structure)**
 
 `mysqldump -u root -psecret --no-data db-name > sql-file.sql`
 
**import sql from local drive**
`mysql -u root -psecret data-name < file-name.sql`
## Database encoding 
### references : 
* https://stackoverflow.com/questions/766809/whats-the-difference-between-utf8-general-ci-and-utf8-unicode-ci
* https://stackoverflow.com/questions/1036454/what-are-the-differences-between-utf8-general-ci-and-utf8-unicode-ci


## database transaction
__what is transaction ?__
> A transaction is a logical unit of work that contains one or more SQL statements. A transaction is an atomic unit
> 
>MySQL transaction allows you to execute a set of MySQL operations to ensure that the database never contains the result of partial operations. In a set of operations, if one of them fails, the rollback occurs to restore the database to its original state.
>
__commands__
- `start transaction`  is used to start a transaction  . `begin` & `begin work` are its alias 
- `commit` is ued to commit the current transaction 
- `rollback` is used to rollback the current transaction 
- after `start transaction`  we can either `commit` or  `rollback` . after `commit` there is no `rollback` 

__example :__ 

*assuming we have a users table with 10 user*

```
select count(*) from users ; // 10
start transaction ;
delete from users where 1 ;
select count(*) from users ; // 0
rollback ; 
select count(*) from users ; // 10
```

__references:__
* https://www.mysqltutorial.org/mysql-transaction.aspx/
## mysql-table-locking

## virtual table 

## mysql data types 

## point in time 


## mysql vs mariadb


|  point| mysql | mariadb |comment|
| -------- | -------- | -------- | -------- |
| users     | Facebook, Github, YouTube, Twitter, PayPal, Nokia, Spotify, Netflix | Redhat, DBS, Suse, Ubuntu, 1&1, Ingenico, Gaming Innovation Group, BlaBla Cars      |
|JSON datatype |Starting version 5.7, MySQL supports a native JSON data| to support replication from MySQL, they only defined an alias for JSON, which is actually a LONGTEXT column. MariaDB claims there is no significant performance difference between the two, but no benchmarks were done recently to support that claim|
|Oracle compatibility|MariaDB Server 10.3 or higher has Oracle compatibility |MySQL has some basic compatibility|
|Key Management| MariaDB offers an AWS key management plugin out of the box|MySQL also provides several plugins for key management, but they’re only available in the Enterprise edition.|
|Super read-only |MySQL enhances the read_only capabilities by providing the super read-only mode. If the read_only system variable is enabled, the server permits client updates only from users who have the SUPER privilege. If the super_read_only system variable is also enabled, the server prohibits client updates even from users who have SUPER. See the description of the read_only.|x|
|Invisible Columns |x| This feature, which is available on MariaDB, while not on MySQL, allows creating columns which aren’t listed in the results of a SELECT * statement, nor do they need to be assigned a value in an INSERT statement when their name isn’t mentioned in the statement.|
|Threadpool |On MySQL’s community edition, the number of threads is static, which limits the flexibility in this situations. The enterprise plan of MySQL includes the threadpool capabilities.|MariaDB supports connection thread pools, which are most effective in situations where queries are relatively short and the load is CPU bound (OLTP workloads).|
|Replication| MySQL versions won’t allow replication from MariaDB servers|most MariaDB versions will allow you to replicate to them, from MySQL databases, which means you can easily migrate MySQL databases to MariaDB |MySQL __GTID(global transaction identifier__) is different than MariaDB GTID,once you replicate data from MySQL to MariaDB, the GTID data will be adjusted accordingly|
|Storage engines|Supported storage engines on MySQL - InnoDB, MyISAM, Memory, CSV, Archive, Blackhole, Merge, Federated, Example.|Supported storage engines on MariaDB: XtraDB, InnoDB, MariaDB ColumnStore, Aria, Archive, Blackhole, Cassandra Storage Engine, Connect, CSV, FederatedX, Memory storage engine, Merge, Mroonga, MyISAM, MyRocks, QQGraph, Sequence Storage Engine, SphinxSE, Spider, TokuDB.|
|Licensing|MySQL has two licensing options - GPLv2 (for Community edition) and Enterprise.|MariaDB Server is licensed as GPLv2|
|Release-rate and updates|less|MariaDB has more frequent releases then MySQL|MariaDB  has its pros and cons though. On the upside, features and bug fixes are released more frequently. On the other side, managing those MariaDB servers requires more updates to keep them up to do date at all times.|
|Ongoing Development|For MySQL, the exclusive developer is Oracle’s MySQL team|MariaDB’s development process is open for a public vote and mailing lists discussions. In addition, anyone can submit patches to MariaDB(Opensource/community)|