SELECT bs.id,bs.branchId,b.name,bs.studentId,s.name from branchstudent as bs
JOIN
branch as b
JOIN
student as s
ON
b.id=bs.branchId and s.id = bs.studentId;



