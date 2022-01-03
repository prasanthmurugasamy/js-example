
>>CREATING TABLE `student` 

CREATE TABLE `student`(id INT ,name VARCHAR(20),CONSTRAINT PRIMARY KEY(id));

>>INSERTING VALUES IN TABLE `student`

insert into `student`(`id`,`name`)values(1,'Jay');

insert into `student`(`id`,`name`)values(2,'Sanjay');

insert into `student`(`id`,`name`)values(3,'Rajesh');

>>CREATING TABLE `branch` 

CREATE TABLE `branch`(id INT ,name VARCHAR(20),CONSTRAINT PRIMARY KEY(id));

>>INSERTING VALUES IN TABLE `branch`

INSERT INTO `branch`(`id`, `name`) VALUES (1,'CSE');

INSERT INTO `branch`(`id`, `name`) VALUES (2,'IT');

>>CREATING TABLE `branchstudent` 

CREATE TABLE `branchStudent`(id INT PRIMARY KEY,branchId INT,studentId INT,CONSTRAINT FOREIGN KEY(branchId) REFERENCES branch(id),FOREIGN KEY(studentId) REFERENCES student(id));

>>INSERTING VALUES IN TABLE `branchstudent`

INSERT INTO `branchstudent`(`id`, `branchId`, `studentId`) VALUES (1,1,1);

INSERT INTO `branchstudent`(`id`, `branchId`, `studentId`) VALUES (2,2,2);

INSERT INTO `branchstudent`(`id`, `branchId`, `studentId`) VALUES (3,2,1);

INSERT INTO `branchstudent`(`id`, `branchId`, `studentId`) VALUES (4,1,3);

