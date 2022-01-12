Input = {
    branchStudent: [
        { id: 1, branchId: 1, studentId: 1 },
        { id: 2, branchId: 2, studentId: 2 },
        { id: 3, branchId: 2, studentId: 1 },
        { id: 4, branchId: 1, studentId: 3 }
    ],
    branch: [
        { id: 1, name: "CSE" },
        { id: 2, name: "IT" }
    ],
    student: [
        { id: 1, name: "Jay" },
        { id: 2, name: "Sanjay" },
        { id: 3, name: "Rajesh" }
    ]
}




//console.log(Input.branchStudent);
 
function mergeArray(){

    let branchStudentMap = []; 
    Input.branchStudent.forEach(branchStd =>{
        const branchName =  Input.branch.find((branch)=>branch.id === branchStd.branchId).name;
        const studentName = Input.student.find((student)=>student.id=== branchStd.studentId).name;
        let temp ={};
        temp.id = branchStd.id;
temp.branchId = branchStd.branchId;
temp.studentId = branchStd.studentId;

if(branchName && studentName)
{
    temp.branchName = branchName;
    temp.studentName =studentName;
    branchStudentMap.push(temp);
}
}
    
        
);
return branchStudentMap;
}


console.log(mergeArray());; 


 

