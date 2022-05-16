# nested query AKA sub-query 

- mysql subquery is query nested within another query 
- it is used to perform complex queries 
- it has two parts inner query and outer query 
- with ___FROM___ clause 
- correlated sub-query
### table of content 

- [using sub-query with ___IN___ clause](#using-sub-query-with-in-clause) 
- [using sub-query in ___WHERE___ clause](#using-sub-query-in-where-clause) 
- [with ___IN___ , ___NOT IN___](#with-in-not-in)
- [with ___FROM___ clause](#with-from-clause)
- [correlated sub-query](#correlated-sub-query)
### using sub-query with ___IN___ clause 

find out the employees from USA from employees and offices table 

```

SELECT 
    lastName, firstName
FROM
    employees
WHERE
    officeCode IN (SELECT 
            officeCode
        FROM
            offices
        WHERE
            country = 'USA');

```

### using sub-query in ___WHERE___ clause 

select the payment records that have the maximum payments from payments table 
```
SELECT 
    customerNumber, 
    checkNumber, 
    amount
FROM
    payments
WHERE
    amount = (SELECT MAX(amount) FROM payments);

```


### with ___IN___ , ___NOT IN___

find out all the customers name who have not made any order 

```
SELECT 
    customerName
FROM
    customers
WHERE
    customerNumber NOT IN (SELECT DISTINCT
            customerNumber
        FROM
            orders);

```

### with ___FROM___ clause 
- the result set returned from sub-query is used as a temporary table
- this table is known as derived table or materialized sub-query 

```
SELECT 
    MAX(items), 
    MIN(items), 
    FLOOR(AVG(items))
FROM
    (SELECT 
        orderNumber, COUNT(orderNumber) AS items
    FROM
        orderdetails
    GROUP BY orderNumber) AS lineitems;

```


### correlated sub-query

- a correlated sub-query is a sub-query that uses the data from the outer query 

select all the products that have above average price among the products in the same product line 


```
select 
    productName ,
    buyPrice 
from products as p1 where buyPrice > (
    select avg(buyPrice) , buyPrice  ,productLine 
    from products 
    where productLine = p1.productLine 
)
```