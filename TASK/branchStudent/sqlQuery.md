>>CREATING TABLE 'student' -->PrimaryKey(id)

    CREATE TABLE student(id INT ,name VARCHAR(20),PRIMARY KEY(id));

>>INSERTING VALES IN student

    insert into student(id,name)values(1,'Jay');

    insert into student(id,name)values(2,'Sanjay');

    insert into student(id,name)values(3,'Rajesh');

>>CREATING TABLE 'branch' -->PrimaryKey(id)

    CREATE TABLE branch(id INT ,name VARCHAR(20),PRIMARY KEY(id));

>>INSERTING VALES IN branch

    INSERT INTO branch(id, name) VALUES (1,'CSE');

    INSERT INTO branch(id, name) VALUES (2,'IT');

>>CREATING TABLE 'branch_student' -->PrimaryKey(id),FOREIGN KEYS(branchId,studentId)

    CREATE TABLE branch_Student(id INT PRIMARY KEY,branch_Id INT,student_Id INT,FOREIGN KEY(branch_Id) REFERENCES branch(id),FOREIGN KEY(student_Id) REFERENCES student(id));

>>INSERTING VALES IN branch_student

    INSERT INTO branch_Student(id, branch_Id, student_Id) VALUES (1,1,1);

    INSERT INTO branch_Student(id, branch_Id, student_Id) VALUES (2,2,2);

    INSERT INTO branch_Student(id, branch_Id, student_Id) VALUES (3,2,1);

    INSERT INTO branch_Student(id, branch_Id, student_Id) VALUES (4,1,3);






