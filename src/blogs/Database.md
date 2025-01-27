---
title: Database Basics
date: "2025-01-27"
tags: ["Database", "Interview"]
summary: "A concise overview of fundamental database concepts, including their definitions, importance, and types."
---

**Q1. What is a database?**

**A:** A database is an organized collection of structured data that is stored and accessed electronically. It allows for efficient storage, retrieval, and management of information. Databases are fundamental to many software applications.

**Q2. What is a Database Management System (DBMS)?**

**A:** A Database Management System (DBMS) is software used to create, manage, access, and control databases. It provides an interface between the database and users or applications. Examples include MySQL, PostgreSQL, Oracle, SQL Server, and MongoDB.

**Q3. Why are databases important for software applications?**

**A:** Databases are crucial for:

- **Data Storage:** Providing a persistent and organized way to store application data.
- **Data Retrieval:** Enabling efficient querying and retrieval of data.
- **Data Integrity:** Ensuring the consistency and accuracy of stored data through constraints and rules.
- **Data Security:** Implementing security measures to protect sensitive data from unauthorized access.
- **Scalability:** Allowing applications to handle increasing amounts of data and users.
- **Data Sharing:** Facilitating access to data by multiple users or applications concurrently.

**Q4. What is the difference between Relational and Non-Relational databases?**

**A:**

- **Relational Databases (SQL):** Organize data into tables with rows and columns, establishing relationships between them. They use SQL (Structured Query Language) for data manipulation and have a predefined schema (structure). Examples: MySQL, PostgreSQL, SQL Server.
- **Non-Relational Databases (NoSQL):** Are more flexible and do not adhere to strict table structures. They handle unstructured data well and are suited for different types of applications. Examples: MongoDB, Cassandra, Redis.

**Q5. What are the main features of relational databases?**

**A:** Main features of relational databases include:

- **Tables:** Data is organized into tables with rows (records) and columns (attributes).
- **Relationships:** Tables can be related to one another using foreign keys.
- **SQL:** SQL is used to query, manipulate, and manage data in relational databases.
- **Schema:** A predefined structure specifying data types, constraints, and relationships.
- **ACID Properties:** Transactions in relational databases adhere to Atomicity, Consistency, Isolation, and Durability (ACID).

**Q6. What are the key advantages of NoSQL databases?**

**A:** Key advantages of NoSQL databases are:

- **Flexibility:** Schema-less or dynamic schemas enable storage of various data structures.
- **Scalability:** Easily scale horizontally (adding more servers).
- **High Performance:** Can handle large volumes of data and high read/write loads efficiently.
- **Variety of Data Types:** Support various data types, like documents, key-value pairs, graphs.
- **Agile Development:** Adapt well to rapidly changing requirements.

**SQL (Structured Query Language)**

**Q7. What is SQL?**

**A:** SQL (Structured Query Language) is the standard language for interacting with relational databases. It's used for creating, modifying, querying, and managing data.

**Q8. List common SQL commands and their functions.**

**A:** Some common SQL commands are:

- **SELECT:** Retrieve data from one or more tables.
- **INSERT:** Add new data into a table.
- **UPDATE:** Modify existing data in a table.
- **DELETE:** Remove data from a table.
- **CREATE TABLE:** Create a new table in the database.
- **ALTER TABLE:** Modify the structure of an existing table.
- **DROP TABLE:** Remove a table from the database.
- **WHERE:** Filter data based on specified conditions.
- **JOIN:** Combine data from multiple tables.
- **GROUP BY:** Group rows based on specific columns.
- **ORDER BY:** Sort the result set based on specific columns.

**Q9. Give an example of a basic SELECT query.**

**A:** SELECT column1, column2 FROM table_name WHERE condition;

```sql
For example: `SELECT name, email FROM users WHERE age > 25;`  This retrieves the names and email addresses of users who are over 25 years old.
```

**Q10. What are Primary and Foreign Keys?**

**A:**

- **Primary Key:** A column (or a set of columns) in a table that uniquely identifies each row. It must have a unique value and cannot be null.
- **Foreign Key:** A column (or a set of columns) in a table that references a primary key in another table. Foreign keys enforce relationships between tables.

**Q11. What is a JOIN operation in SQL? Explain different join types.**

**A:** A JOIN operation combines rows from two or more tables based on a related column between them. Different join types include:

- **INNER JOIN:** Returns only rows where there is a match in both tables.
- **LEFT JOIN (or LEFT OUTER JOIN):** Returns all rows from the left table, and matching rows from the right table. If no match exists, it returns NULL values for columns from the right table.
- **RIGHT JOIN (or RIGHT OUTER JOIN):** Returns all rows from the right table, and matching rows from the left table. If no match exists, it returns NULL values for columns from the left table.
- **FULL OUTER JOIN:** Returns all rows from both tables. If no match is found, NULL values are returned for columns from the missing table.

**Database Design**

**Q12. What is database normalization? Why is it important?**

**A:** Database normalization is the process of organizing data to reduce redundancy and improve data integrity. It involves dividing databases into tables and defining relationships between them according to specific rules. Importance:

- **Reduces Data Redundancy:** Minimizes duplicate data, saving storage space.
- **Improves Data Integrity:** Ensures data consistency by avoiding inconsistencies due to duplicate entries.
- **Facilitates Data Modification:** Makes it easier to update and manage data efficiently.
- **Improves Query Performance:** Leads to faster query execution by retrieving data from smaller and more organized tables.

**Q13. Briefly describe the first three normal forms (1NF, 2NF, 3NF).**

**A:**

- **1NF (First Normal Form):** Eliminates repeating groups of data by creating separate tables for each set of related attributes and uses a primary key to identify the rows.
- **2NF (Second Normal Form):** Must be in 1NF and eliminates redundant data that depends only on part of a primary key. It requires creating separate tables for sets of values that apply to multiple records.
- **3NF (Third Normal Form):** Must be in 2NF and eliminates columns that are not dependent on the primary key but on another non-primary key attribute, thereby reducing redundancy.

**Q14. What is an Entity-Relationship Diagram (ERD)?**

**A:** An Entity-Relationship Diagram (ERD) is a visual representation of a database's structure. It shows the entities (tables), attributes (columns), and relationships between them. It is used to model and design databases before implementation.

**Q15. What are the common types of relationships between tables in database design?**

**A:** Common types of relationships:

- **One-to-One:** One record in table A is associated with at most one record in table B.
- **One-to-Many:** One record in table A is associated with multiple records in table B.
- **Many-to-Many:** Multiple records in table A are associated with multiple records in table B, and this is resolved with an intermediate table called a junction or linking table.

### **Other important concepts**

**Q16. What is an index and why is it used?**

**A:** An index is a data structure that improves the speed of data retrieval in a database table. It works similar to an index in a book, by allowing the DBMS to locate records without scanning the entire table. It is used to enhance performance of SQL queries.

**Q17. What are database transactions and the ACID properties?**

**A:** A transaction is a sequence of operations performed as a single unit of work. The ACID properties ensure reliable transaction processing:

- **Atomicity:** All operations in a transaction either succeed or fail as a single unit.
- **Consistency:** A transaction moves the database from one valid state to another.
- **Isolation:** Concurrent transactions are isolated from each other to prevent conflicts.
- **Durability:** Once a transaction is committed, changes are permanently stored in the database.

### **Questions tailored to a Junior Engineer role:**

**Q18. As a junior engineer, how would you approach creating a database schema for a new application?**

**A:** I would:

1. **Understand Requirements:** Gather clear requirements from stakeholders regarding what data needs to be stored.
2. **Identify Entities:** Define the entities (tables) that will be needed.
3. **Define Attributes:** Determine the attributes (columns) for each entity, specifying their data types.
4. **Establish Relationships:** Determine how entities are related to each other and implement foreign keys.
5. **Consider Normalization:** Design the tables following normalization rules.
6. **Create ERD:** Create a visual representation using ERD, if appropriate.
7. **Implement Schema:** Create the database schema using SQL or the appropriate interface of the DBMS.

**Q19. What is your role related to the database as a junior engineer?**

**A:** My role might involve:

- **Writing Basic SQL:** Writing queries for retrieving, inserting, updating, and deleting data.
- **Data Analysis:** Using queries to analyze data and generate reports.
- **Database Testing:** Testing functionality to ensure correctness.
- **Troubleshooting Issues:** Identifying and addressing database-related errors.
- **Learning Best Practices:** Learning about data modeling and database security.

**Q20. How would you ensure your SQL code is efficient?**

**A:** I would:

- **Use Specific Columns:** Specify the necessary columns instead of using SELECT * (select all).
- **Use WHERE Clause:** Filter records using where clauses to retrieve only required records.
- **Use Indexes:** Check that necessary indexes are present on columns used in where clauses.
- **Avoid Unnecessary Joins:** Avoid unnecessary joins and choose appropriate join types.
- **Test and Optimize:** Test my queries for performance and use profiling tools if needed.