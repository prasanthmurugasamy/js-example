const axios = require('axios');
const concat_map = require('concat-map');
let data = require('E:/Office/Dev/Learn/expressjs/data.json')
let name = "prasanth"


//GET NAME
function getName(){


    axios.get('http://localhost:3000/get?name='+name)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}



//POST(NAME)

 function postName()
{
    axios.post('http://localhost:3000/post', {
        "name" : "Prasanth"
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);}); }
    





// Send a POST request
//USING CONFIG && TRANSFORM RESPONSE

const options = {
    method: 'post',
    url: 'http://localhost:3000/post',
    data: {
      name: 'PRASANTH'
    },
    transformResponse: [(data) => {
      // transform the response
        console.log(data)
      return data;


    }]
  };



//mergeStudent
async function mergeStudent() {
    try {
      let response =  await axios.post ('http://localhost:3000/student',data);
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }
  
//mergeStudent()
//getName()
//postName()
//axios(options)



//mergeStudent()