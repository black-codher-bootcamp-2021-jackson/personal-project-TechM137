// You can create all the fetches to your own APIs and externals APIs here
// This example axios is specifically for our Profile API and is why the file is called questionsService.js

import axios from "axios";

const getAllQuestions = async () => {
  // console.log("hello")
  const response = await axios.get(`/api/questions`);
// console.log(response)
  return response.data || [];
};
export { getAllQuestions };

// or

// getQuestions = > () {
// get.axios('/api/Questions') 
//      .then(() = >
//  console.log('Demo questions have been received');
//  })
//      .catch(() = >
//  alert('error retrieving demo questions');

// // All of the endpoints in this file can be exported below



// async function getUser(){
//  try{
//     const response = await axios.get('/user ID = ');
//  console.log(response);
//  } catch(error) {
//      console.error(error);
// }
// }

// OR

//  axios.get('/user', {
//      params: {
//      ID: 
//  }
// })
//  .then(function(response) {
//handle success
// console.log (response);
// })
//  .catch (function(error){
//handle error
//  console.log(error);
// })
// .then(function(){
//always executed
// });

// Endpoint for score = POST request to front end rendered through score page

// Send a GET request (default method)
// axios('/user/12345');

// Send a POST request
// axios({
//     method: 'post',
//     url: '/user/12345',
//     data: {
//       firstName: 'Fred',
//       lastName: 'Flintstone'
//     }
//   });
