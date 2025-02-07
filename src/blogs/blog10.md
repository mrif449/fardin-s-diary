---
title: Junior Developer Written Test
date: "2025-02-07"
tags: ["Written", "Interview"]
summary: "This document tests a junior developer's skills in problem-solving, databases, and software engineering with coding challenges, SQL queries, and key principles."
---
## Problem-Solving Skills (Programming)

### 1. Reverse a String
**Q:** Write a function to reverse a string in Python.  
**A:** 
```python
def reverse_string(s):
    return s[::-1]
```

### 2. Find Missing Number
**Q:** Given an array containing n distinct numbers from 0 to n, find the missing one.  
**A:**
```python
def missing_number(nums):
    n = len(nums)
    return n * (n + 1) // 2 - sum(nums)
```

### 3. Fibonacci Sequence
**Q:** Write a recursive function to calculate the nth Fibonacci number.  
**A:**
```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
```

### 4. Palindrome Check
**Q:** How would you check if a string is a palindrome?  
**A:**
```javascript
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
```

### 5. FizzBuzz
**Q:** Solve FizzBuzz: Print numbers 1-100. For multiples of 3 print "Fizz", multiples of 5 print "Buzz", multiples of both print "FizzBuzz".  
**A:**
```python
for i in range(1, 101):
    output = ""
    if i % 3 == 0: output += "Fizz"
    if i % 5 == 0: output += "Buzz"
    print(output or i)
```

---

## Database Knowledge

### 1. SQL Query
**Q:** Write a SQL query to find all customers with orders over $100.  
**A:**
```sql
SELECT Customers.Name 
FROM Customers
JOIN Orders ON Customers.id = Orders.customer_id
WHERE Orders.amount > 100;
```

### 2. Normalization
**Q:** What is database normalization?  
**A:** Normalization is the process of organizing data to reduce redundancy. It involves dividing tables into smaller tables and defining relationships between them (1NF, 2NF, 3NF).

### 3. Indexes
**Q:** Why use database indexes?  
**A:** Indexes speed up data retrieval by providing quick lookups. They work like a book index but increase storage and slightly slow down writes.

### 4. ACID Properties
**Q:** What does ACID stand for?  
**A:** 
- **A**tomicity: All operations succeed or fail together
- **C**onsistency: Valid data transitions
- **I**solation: Concurrent transactions don't interfere
- **D**urability: Committed data survives failures

### 5. JOIN Types
**Q:** Explain the difference between INNER JOIN and LEFT JOIN.  
**A:** 
- INNER JOIN returns matching records from both tables
- LEFT JOIN returns all records from the left table + matches from the right table

---

## Software Engineering Concepts

### 1. OOP Principles
**Q:** Name the four OOP principles.  
**A:** 
1. Encapsulation
2. Inheritance
3. Polymorphism
4. Abstraction

### 2. SOLID Principles
**Q:** What does the "S" in SOLID stand for?  
**A:** Single Responsibility Principle: A class should have only one reason to change.

### 3. Git Basics
**Q:** How would you create a new branch and push it to remote?  
**A:**
```
git checkout -b feature-branch
git push -u origin feature-branch
```

### 4. Testing Types
**Q:** What's the difference between unit tests and integration tests?  
**A:** 
- Unit tests: Validate individual components in isolation
- Integration tests: Verify interactions between multiple components

### 5. REST API
**Q:** What are RESTful HTTP methods?  
**A:** 
- GET: Retrieve data
- POST: Create data
- PUT/PATCH: Update data
- DELETE: Remove data

### 6. MVC Architecture
**Q:** What is MVC?  
**A:** Architectural pattern separating:
- **M**odel: Data layer
- **V**iew: Presentation layer
- **C**ontroller: Business logic layer

### 7. Error Handling
**Q:** Why is exception handling important?  
**A:** Prevents crashes, allows graceful error recovery, and improves debugging by capturing contextual error information.
