require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { param } = require("express/lib/request");
const path = require("path");

// IMPORT YOUR SCHEMAS HERE
require("./models/Questions"); //This is just an example. Don't forget to delete this


const app = express();

// This is where your API is making its initial connection to the database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
  useNewUrlParser: true, useUnifiedTopology: true
})

.then((result) => console.log("connected to db"))
  .catch((err) => console.log(err));

app.use(bodyParser.json());

// IMPORT YOUR API ROUTES HERE
// Below is just an example. Don't forget to delete it. 
// It's importing and using everything from the profilesRoutes.js file and also passing app as a parameter for profileRoutes to use
require("./routes/questionsRoutes")(app); 

// app.post(`/api/profile`, async (req, res) => {
//   const questions = await Questions.create(req.body);

//   return res.status(201).send({
//     error: false,
//     answers,
//   });
// });

// app.post('/questionsService', (req, res) => {
//   const { answers } = req.params; 
//   res.header("Content-Type", "application/json");
//   res.status(202);

//   res.send(questionsServices);

// })

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
