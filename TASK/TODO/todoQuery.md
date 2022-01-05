>>CREATING TABLE user_details -->primarykey(id)

    CREATE TABLE user_details (id INT,user_name varchar(20),PRIMARY KEY(id));

>>INSERTING VALUES IN user_details

    INSERT INTO user_details(id,user_name) VALUES(1,'Vasanth');
    
    INSERT INTO user_details(id,user_name) VALUES(2,'Jay');
    
    INSERT INTO user_details(id,user_name) VALUES(3,'Satish');

>>CREATING TABLE category -->primarykey(id)

    CREATE TABLE category(id INT,category_name VARCHAR(20),PRIMARY KEY(id));
    
>>INSERTING INTO TABLE category

    INSERT INTO category(id,category_name) VALUES (1,'IT');
    
    INSERT INTO category(id,category_name) VALUES (2,'Personal');

>>CREATING TABLE status-->primarykey(id)

    CREATE TABLE status(id INT,status_name VARCHAR(20),PRIMARY KEY(id));
    
>>INSERTING INTO status

    INSERT INTO status(id,status_name) VALUES (1,'in-progress');
    
    INSERT INTO status(id,status_name) VALUES (2,'not-started');
    
    INSERT INTO status(id,status_name) VALUES (3,'completed');

>>CREATING TABLE todo-->primarykey(id),ForeignKey(category_id,user_id)

    CREATE TABLE todo(id INT,user_id INT,task VARCHAR(100),category_id INT,status_id INT,created_date date,due_date date,PRIMARY KEY(id),FOREIGN KEY(status_id) REFERENCES status(id),FOREIGN KEY(user_id) REFERENCES user_details(id),FOREIGN KEY(category_id) REFERENCES category(id));


>>INSERTING INTO todo

    INSERT INTO todo(id,user_id,task,category_id,status_id,create_date date,due_date) VALUES(1,1,'Need to achieve 800 orders',1,1,'2022-01-04',CURRENT_DATE);
    
    INSERT INTO todo(id,user_id,task,category_id,status_id,create_date date,due_date) VALUES(2,2,'Train 5 Interns',1,1,'2022-01-04',CURRENT_DATE);
    
    INSERT INTO todo(id,user_id,task,category_id,status_id,create_date date,due_date) VALUES(3,3,'Get Trained in Devops',2,3,'2022-01-04',CURRENT_DATE);
    
    INSERT INTO todo(id,user_id,task,category_id,status_id,create_date date,due_date) VALUES(4,3,'Get Trained in Hasura',2,1,'2022-01-04',CURRENT_DATE);
    
    INSERT INTO todo(id,user_id,task,category_id,status_id,create_date date,due_date) VALUES(5,3,'Get Trained in Hardware',2,1,'2022-01-04',CURRENT_DATE);

>>SELECTING FULL DETAILS

    SELECT todo.id, user_details.user_name, todo.task, category.category_name, status.status_name, todo.due_date
    FROM todo 
	LEFT JOIN user_details ON todo.user_id = user_details.id 
	LEFT JOIN category ON todo.category_id = category.id 
	LEFT JOIN status ON todo.status_id = status.id;    

    
    
    

>>SELECTING NUMBER OF TASK
    CREATE VIEW taskCount AS
    SELECT user_details.user_name,COUNT(user_details.user_name) FROM
    todo 
    JOIN
    user_details ON user_details.id = todo.user_id GROUP BY user_details.user_name;


>>SELECTING TASK BASED ON COMPLETION
    CREATE VIEW taskCount AS
    SELECT user_details.user_name,COUNT(user_details.user_name) FROM
    todo 
    JOIN
    user_details ON user_details.id = todo.user_id WHERE todo.status_id <= 2 GROUP BY user_details.user_name ;






SELECT COUNT(todo.id),user_details.user_name,status.status_name FROM
todo 
JOIN
user_details ON user_details.id = todo.user_id 
JOIN status ON todo.status_id = status.id
GROUP BY user_details.user_name,status.status_name ;


DATE-FORMAT:'2022-01-04'