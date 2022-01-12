
import express from 'express';
const app = express();

app.use(express.json());





app.post('/data', (req, res) => {
    res.send(mergeStudent(req.body));
})

app.listen(4000, () => {
 console.log("Server Started");
})






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
 
 