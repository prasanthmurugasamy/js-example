1)DataBase :
>A database is an organized collection of structured information.
>A database is usually controlled by a database management system (DBMS). 
>In a database, data is organized into tables consisting of rows and columns and it is indexed so data can be updated, expanded, and deleted easily.
>There are different kinds of databases :
    >Relational Database:
    --A relational database is made up of a set of tables with data that fits into a predefined category.
    >Distributed Database:
    --A distributed database is a database in which portions of the database are stored in multiple physical locations, and in which processing is dispersed or replicated among different points in a network. 
    >Cloud Databse:
    --A cloud database is a database that typically runs on a cloud computing platform. Database service provides access to the database. Database services make the underlying software-stack transparent to the user.
    
2)ACID:(Atomicity,Consistency,Isolation,Durability)

>Transaction:
    A transaction is a single logical unit of work which accesses and possibly modifies the contents of a database.

>Atomicity:
    Either the entire transaction takes place at once or doesn’t happen at all. There is no midway. It involves the following two operations. 
    —Abort: 
    If a transaction aborts, changes made to database are not visible. 
    —Commit: 
    If a transaction commits, changes made are visible. 

>Consistency:
    Data is in a consistent state when a transaction starts and when it ends.For example, in an application that transfers funds from one account to another, the consistency property ensures that the total value of funds in both the accounts is the same at the start and end of each transaction.

> Isolation: 
    The term 'isolation' means separation. Isolation is the property of a database where no data should affect the other one. The operation on one database should begin when the operation on the first database gets complete. It means if two operations are being performed on two different databases, they may not affect the value of one another. In the case of transactions, when two or more transactions occur simultaneously, the consistency should remain maintained. Any changes that occur in any particular transaction will not be seen by other transactions until the change is not committed in the memory.

>Durability: 
    Durability ensures the permanency of something. The term durability ensures that the data after the successful execution of the operation becomes permanent in the database. The durability of the data should be so perfect that even if the system fails or leads to a crash, the database still survives. However, if gets lost, it becomes the responsibility of the recovery manager for ensuring the durability of the database. For committing the values, the COMMIT command must be used every time we make changes.

3)Normalization:
>Normalization is a database design technique that reduces data redundancy and eliminates undesirable characteristics like Insertion, Update and Deletion Anomalies. Normalization rules divides larger tables into smaller tables and links them using relationships. The purpose of Normalisation in SQL is to eliminate redundant (repetitive) data and ensure data is stored logically.

>Db Normal forms:
--1NF
    Each table cell should contain a single value.
    Each record needs to be unique.

--2NF
    R 1- Be in 1NF
    R 2- Single Column Primary Key that does not functionally dependant on any subset of candidate key relation
--3NF
    R 1- Be in 2NF
    R 2- Has no transitive functional dependencies
--BCNF
    Even when a database is in 3rd Normal Form, still there would be anomalies resulted if it has more than one Candidate Key.Sometimes is BCNF is also referred as 3.5 Normal Form.
--4NF
    If no database table instance contains two or more, independent and multivalued data describing the relevant entity, then it is in 4th Normal Form.

4)DDL & DML
>>DDL-Data Definition Language
>DDL consists of the SQL commands that can be used to define the database schema. It deals with descriptions of the database schema and is used to create and modify the structure of database objects in the database.DDL is a set of SQL commands used to create, modify, and delete database structures but not data.

>DDL Commands:
-Create - Create db or table
-Drop - Drop Table or db 
-Alter - Used to alter structure of table or db
-Truncate - Remove all the records from the table
-Rename - Used to rename the table

>>DML-Data Manipulation Language
The SQL commands that deals with the manipulation of data present in the database belong to DML or Data Manipulation Language and this includes most of the SQL statements.

>List of DML Commands:
-Insert:Insert a data in the table
-Update:Update the data in the table
-Delete:Delete the data in the table


5)JOINS:
A sql join statement is used to combine data or rows from two or more tables based on common field between them.

Types:
>Inner Join:
    -It selects all rows from both the tables as long as the condition satisfies(Union).

>Left Join:
    -It returns all the rows of the left table and matching rows from the right table.
>Right Join:
    -It returns all the rows of the right table and the matching rows from the left table
>Full Join:
    -Returns a result by combining both left and right join tables








