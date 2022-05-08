> A join clause is used to combine rows from two or more tables , based on a related columns between them 

```
SELECT column_names 
FROM table1 
JOIN table2 
ON table1.column_name = table2.column_name 

```

there are 5 types of join 
1. inner join - returns all records that have matching values in both table
2. left join - all records from left and matching from right
3. right join - matching from left and all records from right  
4. cross join - all records from left and right ,with  matching values residing in the same column
5. self join ( a table joining with itself )


__self join example__ 
we want to find customer from same city from customers table 
```
SELECT A.CustomerName AS CustomerName1, B.CustomerName AS CustomerName2, A.City
FROM Customers A, Customers B
WHERE A.CustomerID <> B.CustomerID
AND A.City = B.City
ORDER BY A.City;

```