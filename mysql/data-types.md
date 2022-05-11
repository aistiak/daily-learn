## Data Types 

In mysql there are three main data types 
1. string 
2. numeric
3. data and time 

## string data types  (14)
1. ___CHAR(size)___ A FIXED length string (can contain letters, numbers, and special characters). The size parameter specifies the column length in characters - can be from 0 to 255. Default is 1 

2. ___VARCHAR(size)___ 	A VARIABLE length string (can contain letters, numbers, and special characters). The size parameter specifies the maximum column length in characters - can be from 0 to 65535

3. ___BINARY(size)___  Equal to CHAR(), but stores binary byte strings. The size parameter specifies the column length in bytes. Default is 1

4. ___VARBINARY(size)___ Equal to VARCHAR(), but stores binary byte strings. The size parameter specifies the maximum column length in bytes.

5. ___TINYBLOB___	For BLOBs (Binary Large Objects). Max length: 255 bytes

6. ___TINYTEXT___	Holds a string with a maximum length of 255 characters

7. ___TEXT(size)___	Holds a string with a maximum length of 65,535 bytes

8. ___BLOB(size)___	For BLOBs (Binary Large Objects). Holds up to 65,535 bytes of data

9. ___MEDIUMTEXT___	Holds a string with a maximum length of 16,777,215 characters

10. ___MEDIUMBLOB___ For BLOBs (Binary Large Objects). Holds up to 16,777,215 bytes of data

11. ___LONGTEXT___	Holds a string with a maximum length of 4,294,967,295 characters

12. ___LONGBLOB___	For BLOBs (Binary Large Objects). Holds up to 4,294,967,295 bytes of data

13. ___ENUM___ (val1, val2, val3, ...)	A string object that can have only one value, chosen from a list of possible values. You can list up to 65535 values in an ENUM list. If a value is inserted that is not in the list, a blank value will be inserted. The values are sorted in the order you enter them

14. ___SET___ (val1, val2, val3, ...)	A string object that can have 0 or more values, chosen from a list of possible values. You can list up to 64 values in a SET list


## numeric data type 

1. ___BIT(size)___	A bit-value type. The number of bits per value is specified in size. The size parameter can hold a value from 1 to 64. The default value for size is 1.
2. ___TINYINT(size)___	A very small integer. Signed range is from -128 to 127. Unsigned range is from 0 to 255. The size parameter specifies the maximum display width (which is 255)
3. ___BOOL___	Zero is considered as false, nonzero values are considered as true.
4. ___BOOLEAN___	Equal to BOOL
5. ___SMALLINT(size)___	A small integer. Signed range is from -32768 to 32767. Unsigned range is from 0 to 65535. The size parameter specifies the maximum display width (which is 255)
6. ___MEDIUMINT(size)___	A medium integer. Signed range is from -8388608 to 8388607. Unsigned range is from 0 to 16777215. The size parameter specifies the maximum display width (which is 255)
7. ___INT(size)___	A medium integer. Signed range is from -2147483648 to 2147483647. Unsigned range is from 0 to 4294967295. The size parameter specifies the maximum display width (which is 255)
8. ___INTEGER(size)___	Equal to INT(size)
9. ___BIGINT(size)___	A large integer. Signed range is from -9223372036854775808 to 9223372036854775807. Unsigned range is from 0 to 18446744073709551615. The size parameter specifies the maximum display width (which is 255)
10. ___FLOAT(size, d)___	A floating point number. The total number of digits is specified in size. The number of digits after the decimal point is specified in the d parameter. This syntax is deprecated in MySQL 8.0.17, and it will be removed in future MySQL versions
11. ___FLOAT(p)___	A floating point number. MySQL uses the p value to determine whether to use FLOAT or DOUBLE for the resulting data type. If p is from 0 to 24, the data type becomes FLOAT(). If p is from 25 to 53, the data type becomes DOUBLE()
12. ___DOUBLE(size, d)___	A normal-size floating point number. The total number of digits is specified in size. The number of digits after the decimal point is specified in the d parameter
13. ___DOUBLE PRECISION(size, d)___	 
14. ___DECIMAL(size, d)___	An exact fixed-point number. The total number of digits is specified in size. The number of digits after the decimal point is specified in the d parameter. The maximum number for size is 65. The maximum number for d is 30. The default value for size is 10. The default value for d is 0.
15. ___DEC(size, d)___	Equal to DECIMAL(size,d)


## date and time data types 

1. ___DATE___	A date. Format: YYYY-MM-DD. The supported range is from '1000-01-01' to '9999-12-31'
2. ___DATETIME(fsp)___	A date and time combination. Format: YYYY-MM-DD hh:mm:ss. The supported range is from '1000-01-01 00:00:00' to '9999-12-31 23:59:59'. Adding DEFAULT and ON UPDATE in the column definition to get automatic initialization and updating to the current date and time
3. ___TIMESTAMP(fsp)___	A timestamp. TIMESTAMP values are stored as the number of seconds since the Unix epoch ('1970-01-01 00:00:00' UTC). Format: YYYY-MM-DD hh:mm:ss. The supported range is from '1970-01-01 00:00:01' UTC to '2038-01-09 03:14:07' UTC. Automatic initialization and updating to the current date and time can be specified using DEFAULT CURRENT_TIMESTAMP and ON UPDATE 4. 4..4.CURRENT_TIMESTAMP in the column definition
4. ___TIME(fsp)___	A time. Format: hh:mm:ss. The supported range is from '-838:59:59' to '838:59:59'
5. ___YEAR___	A year in four-digit format. Values allowed in four-digit format: 1901 to 2155, and 0000.
MySQL 8.0 does not support year in two-digit format.