//OLD QUERY
SELECT bs.id,bs.branchId,b.name,bs.studentId,s.name from branchstudent as bs
JOIN
branch as b
JOIN
student as s
ON
b.id=bs.branchId and s.id = bs.studentId;



//UPDATED QUERY

SELECT branch_student.id,branch_student.branch_id, branch.name ,branch_student.student_id, student.name AS student_Name
FROM branch_student 
	LEFT JOIN branch  ON branch_student.branch_id = branch.id 
	LEFT JOIN student ON branch_student.student_id = student.id;