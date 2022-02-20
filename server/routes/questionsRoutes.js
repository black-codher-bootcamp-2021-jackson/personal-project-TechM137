// const mongoose = require("mongoose");
// const Questions = mongoose.model("questions");

// const questionsRoutes = (app) => {
//   app.get(`/api/questions`, async (req, res) => {
//     const questions = await Questions.find();

//     return res.status(200).send(questions);
//   });
// }

// Fetch request in the component where it renders (client - riskassess.js) to output each question and output the answers for each q, 

//   app.fetch(`/api/profile`, async (req, res) => {
//     const profile = await Profile.create(req.body);

//     return res.status(201).send({
//       error: false,
//       profile,
//     });
//   });