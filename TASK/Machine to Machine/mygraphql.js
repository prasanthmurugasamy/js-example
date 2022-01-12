const axios = require("axios");

const endpoint = " https://intent-airedale-30.hasura.app/v1/graphql";
const headers = {
	"content-type": "application/json",
     "x-hasura-admin-secret": "8qajlyRM9FMUBz8ymYKhy3YnjYtvV9iwBYLglkAC06i1Ki0jgMkCJ344HPWYpQUJ"};
const graphqlQuery = {

    "query": `query MyQuery {
        branch_student {
          id
          branch_id
          student_id
        }
        branch {
          id
          name
        }
        student {
          id
          name
        }
      } `,
    "variables": {}
};

const response = axios({
  url: endpoint,
  method: 'post',
  headers: headers,
  data: graphqlQuery
}).then(res =>console.log(JSON.stringify(res.data)));

//console.log(response.data); // data
//console.log(response.errors); // errors if any



