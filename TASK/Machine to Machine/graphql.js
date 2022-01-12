
let express = require('express');
var app = express();
const axios = require("axios");
app.use(express.json());
app.use(express.urlencoded({extended:false}))


//declarations

const endpoint = " https://dcore.fr8.in/v1/graphql";
const headers = {
	"content-type": "application/json",};
    
//POST

app.post('/city',(req,res)=>{
    let city = req.query.name
    let variables = {"search": `%${city}%`}
    //QUERY
    const graphqlQuery = {

        "query": `query city($search: String, $limit: Int) {
            city(
              where: {
                _and: [
                  { name: { _ilike: $search } }
                  { is_connected_city: { _eq: true } }
                ]
              }
              limit: $limit
            ) {
              id
              name
              is_connected_city
            }
          }
          `,
        "variables": variables
    };

    
    console.log(variables)

    async function getData() {
        try {
            const response = await axios({
                url: endpoint,
                method: 'post',
                headers: headers,
                data: graphqlQuery
                })
          console.log(JSON.stringify(response.data))
          res.json(response.data)
        } catch (error) {
          console.error(error)
        }
      }
     getData()
   
})

app.listen(3002,function(){
    console.log("Server Started"); 
  })

