'use strict';

// 8-165 Creating APIs using the Serverless Framework
// 8-171 Lambda Integration & Body Mapping Templates with Serverless Framework
// Request body variables will be mapped to js variables ...
// ... the Request body mapping template must be written in the function definition in serverless.yml (qv)

module.exports.add = async (event, context) => {
/*
    let {num1, num2} = JSON.parse(event.body);
    // NB pattern/syntax for initialising using event in Lambda Functions
    let output = {
        num1: num1,
        num2: num2,
        result: num1 + num2
    }
    console.log(output);    // just in case of a problem
    return {
    statusCode: 200,
    body: JSON.stringify(output),
  };
*/
    // REMmed code above from previous lectures
    // look out for HTTP Request body, from which to map properties to js variables
  let {num1, num2} = event;     // request body mapping, no need to parse
  return num1 + num2;

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
