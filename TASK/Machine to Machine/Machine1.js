
const { request } = require('express');
var express = require('express');
var app = express();
var data = require('E:/Office/Dev/Learn/expressjs/data.json')
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.listen(3000,function(){
  console.log("Server Started"); 
})



//GET 
app.get("/get",(req,res)=>res.send(("HELLO " + req.query.name).toUpperCase()))
//POST
app.post('/post',(req,res)=>res.json({Output : 'HELLO '+ req.body.name}))
//GET ONLY DATA
app.post('/branchStudent',(req,res)=>res.json(data))
//PERFORM MERGE 
app.post('/student',(req,res) =>res.json((mergeStudent(req.body)))); 


function mergeStudent(x)
{
   let Input = x
  let branchStudentMap = []
  Input.branchStudent.forEach(branchStd => {
    let temp = {}
    const branchName = Input.branch.find((branch) => branch.id === branchStd.branchId)?.name;
    const studentName = Input.student.find((student) => student.id === branchStd.studentId)?.name;
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