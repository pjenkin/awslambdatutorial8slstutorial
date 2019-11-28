'use strict';

// 8-165 Creating APIs using the Serverless Farmework

module.exports.add = async event => {

    let {num1, num2} = JSON.parse(event.body);
    // NB pattern/syntax for initialising using event in Lambda Functions

    return {
    statusCode: 200,
    body: JSON.stringify(
      {
          num1: num1,
          num2: num2,
          result: num1 + num2
      }
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
