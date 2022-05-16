
### ORDER BY 

is used to sort the result in ascending or descending order 

```
SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC|DESC;

```

### GROUP BY 

- groups rows  that have same values into summery rows , like find the number of customers in each country 

- without aggregation functions group by gets the first row 

- is often used with aggregate functions 

```
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country;

SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
ORDER BY COUNT(CustomerID) DESC;

SELECT Shippers.ShipperName, COUNT(Orders.OrderID) AS NumberOfOrders FROM Orders
LEFT JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID
GROUP BY ShipperName;

```

### HAVING clause 

HAVING clause was added to SQL because the WHERE keyword cannot be used with aggregate functions.

```
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5;

```