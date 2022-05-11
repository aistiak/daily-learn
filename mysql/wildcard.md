

## Wild Card 

- A wildcard character is used to substitute one or more characters in a string.
- Wildcard characters are used with the LIKE operator. The LIKE operator is used in a WHERE clause to search for a specified pattern in a column.

|Symbol	| Description	Example | 
|-----|-----|
|%	|Represents zero or more characters	bl% finds bl, black, blue, and blob|
|_	|Represents a single character	h_t finds hot, hat, and hit|
|[]	|Represents any single character within the brackets	h[oa]t finds hot and hat, but not hit|
|^	|Represents any character not in the brackets	h[^oa]t finds hit, but not hot and hat|
|-	|Represents any single character within the specified range	c[a-b]t finds cat and cbt|


```
WHERE CustomerName LIKE 'a%' // 	Finds any values that starts with "a"

WHERE CustomerName LIKE '%a'	// Finds any values that ends with "a"
WHERE CustomerName LIKE '%or%'	// Finds any values that have "or" in any position
WHERE CustomerName LIKE '_r%'	// Finds any values that have "r" in the second position
WHERE CustomerName LIKE 'a__%'	// Finds any values that starts with "a" and are at least 3 characters in length
WHERE ContactName LIKE 'a%o'	// Finds any values that starts with "a" and ends with "o"
```