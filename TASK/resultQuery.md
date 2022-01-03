SELECT bs.id,bs.branchId,b.name,bs.studentId,s.name from branchstudent as bs
JOIN
branch as b
JOIN
student as s
ON
b.id=bs.branchId and s.id = bs.studentId;



//
SELECT `bs`.*, `b`.`name`, `s`.`name`
FROM `branchstudent` AS `bs` 
	LEFT JOIN `branch` AS `b` ON `bs`.`branchId` = `b`.`id` 
	LEFT JOIN `student` AS `s` ON `bs`.`studentId` = `s`.`id`;