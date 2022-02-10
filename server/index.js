require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { param } = require("express/lib/request");

// IMPORT YOUR SCHEMAS HERE
require("./models/Profiles"); //This is just an example. Don't forget to delete this
const profileRoutes = require("./routes/profilesRoutes");

const app = express();

// This is where your API is making its initial connection to the database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
  useNewUrlParser: true,
});

app.use(bodyParser.json());

// IMPORT YOUR API ROUTES HERE
// Below is just an example. Don't forget to delete it. 
// It's importing and using everything from the profilesRoutes.js file and also passing app as a parameter for profileRoutes to use
require("./routes/profilesRoutes")(app); 

// app.post(`/api/profile`, async (req, res) => {
//   const profile = await Profile.create(req.body);

//   return res.status(201).send({
//     error: false,
//     profile,
//   });
// });

// app.post('/profilesService', (req, res) => {
//   const { firstName, lastName, location } = req.params; 
//   res.header("Content-Type", "application/json");
//   res.status(202);

//   res.send(profileServices);

// })

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
