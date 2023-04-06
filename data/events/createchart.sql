SELECT [Location], COUNT(*) as employeeID FROM EmployeeCheckIn 
WHERE Date BETWEEN '2023-04-03 00:00:00' AND '2023-04-03 23:59:59'
GROUP BY Location;
