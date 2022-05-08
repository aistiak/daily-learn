> UNION operator is used to combine the result set of two or more select statements 

- every select statement must have the same number of columns 
- the colum data types have to be the same 
- the colum order has to be maintained 

```
SELECT column_name(s) FROM table1
UNION
SELECT column_name(s) FROM table2;

```

> UNION select distinct values by default to allow duplicate use UNION ALL 

```
SELECT column_name(s) FROM table1
UNION ALL
SELECT column_name(s) FROM table2;

```
