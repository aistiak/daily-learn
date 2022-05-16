# views 

- a view is a virtual table based on the results of an sql statement 
- a view contains rows and tables just like a real table 
- a view can be made from one or more real table 
- view gets updated if there is any change in base tables 
- view are for when base table data get updated frequently and materialized views are for when data gets read frequently 
- how mysql does not support materialized views natively 
- virtual table and views are same thing 
 
### create 
```
    CREATE VIEW [Brazil Customers] AS
    SELECT CustomerName, ContactName
    FROM Customers
    WHERE Country = 'Brazil';

```
### update 

```
CREATE OR REPLACE VIEW [Brazil Customers] AS
    SELECT CustomerName, ContactName , mobileNumber 
    FROM Customers
    WHERE Country = 'Brazil';

````
### select 

```
    SELECT * FROM [Brazil Customers];

```

###  drop 

```
    DROP VIEW [Brazil Customers];

```