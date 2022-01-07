/*

1) localhost:3000/get?name=jay 

2)localhost:3000/post

3)localhost:3000/student




POST SOURCE : {"name":"Prasanth"}

{
    "branchStudent": [
       {
          "id": 1,
          "branchId": 1,
          "studentId": 1
       },
       {
          "id": 2,
          "branchId": 2,
          "studentId": 2
       },
       {
          "id": 3,
          "branchId": 2,
          "studentId": 1
       },
       {
          "id": 4,
          "branchId": 1,
          "studentId": 3
       }
    ],
    "branch": [
       {
          "id": 1,
          "name": "CSE"
       },
       {
          "id": 2,
          "name": "IT"
       }
    ],
    "student": [
       {
          "id": 1,
          "name": "Jay"
       },
       {
          "id": 2,
          "name": "Sanjay"
       },
       {
          "id": 3,
          "name": "Rajesh"
       }
    ]
 }

*/




var express = require('express');
var app = express();
var data = require('E:/Office/Dev/Learn/expressjs/data.json')
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.listen(3000,function(){
  console.log("Server Started"); 
})


//1:DYNAMIC NAME - GET
 app.get("/get",(req,res)=>res.send(("HELLO " + req.query.name).toUpperCase()))  

/* app.get("/:user",(req,res)=>res.send("WELCOME ! "+req.params.user+" !")) */

//2.DYNAMIC NAME - POST
 app.post('/post',(req,res)=>res.json({Output : 'HELLO '+ req.body.name}))


//GET BRANCHSTUDENT JSON FILE
app.get('/branchStudent',(req,res) => res.json(data)) 


//3.BRANCHSTUDENT JSON
 app.post('/student',(req,res) =>res.json({ResponseBody : (mergeStudent(req.body))})); 
  



function mergeStudent(x)
{
   let Input = x
  let branchStudentMap = []
  Input.branchStudent.forEach(branchStd => {
    let temp = {}
    const branchName = Input.branch.find((branch) => branch.id === branchStd.branchId).name;
    const studentName = Input.student.find((student) => student.id === branchStd.studentId).name;
    temp.id = branchStd.id;
    temp.branchId = branchStd.branchId;
    temp.studentId = branchStd.studentId;
if(branchName && studentName){
  temp.branchName = branchName;
  temp.studentName = studentName;
  branchStudentMap.push(temp);
    }}); 
    return branchStudentMap;
}
 
 