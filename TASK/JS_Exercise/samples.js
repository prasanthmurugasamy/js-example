/* const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
]; */


/*   const ages = [1,2,3,4,5,6,7,8,9]
function addone(num)
{
  return num = num+1
}
let newarr = ages.map(age=>addone(age))

console.log(newarr);  */
/*
 const srages = ages.sor   t();
 console.log(srages) */
/*
for(let i =0;i<=ages.length;i++){
  console.log(Math.sqrt(ages[i]))
}
 */
/* const retailCompanies = companies.filter(company => company.category ==='Retail');
console.log(retailCompanies)

const retailCompanies1 = companies.filter(function(company){
if(company.category==='Auto'){
  return true
}
});

console.log(retailCompanies1)
s

for(let i=0;i<=companies.length;i++)
{
  console.log(companies[i])
}



companies.forEach(function(company){
console.log(company.category)
});




 */


/* const agesSquare = ages.map(function(age){
  return Math.sqrt(age)
})
 
console.log(agesSquare) */

/* 
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


function mergeStudent()
{
  let branchStudentMap = []
  Input.branchStudent.forEach(branchStd => {
    let temp = {}
  const branchName = Input.branch.find((branch) => branch.id === branchStd.branchId).name;
  const studentName = Input.student.find((student) => student.id === branchStd.studentId).name;
 temp.id = branchStd.id;
 temp.branchId = branchStd.branchId;
 temp.studentId = branchStd.studentId;
if(branchName && studentName)
{
  temp.branchName = branchName;
  temp.studentName = studentName;
  branchStudentMap.push(temp);
}

    
  });

  return branchStudentMap;
}

console.log(mergeStudent()); */




/* const ages = [1,2,3,4,5,6,7,8,9]


let newarr =  ages.filter(function(age)
{
  return age > 5
})

console.log(newarr) */