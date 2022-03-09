const express = require('express');
const mongoose = require('mongoose');
// const mongo = require('mongodb').MongoClient;
const path = require('path');

// app.use(express.json());
// const https = require ("https");

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/api', (req, res) => {
    const data = {
        username: 'melly',
        age: 7
    };
    res.json(data)
});
 
app.get('/api/names', (req, res) => {
    const data = {
        username: 'drew',
        age: 7
    };
    res.json(data)
});

app.listen(PORT, console.log(`server is starting at ${PORT}`));


// const uri = process.env.MONGO_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
// mongoose.connection.once('open', () => {
//     console.log("Mongo connected");
// });



// app.post("/questions", (req, res) => {

//   let db, questions

//   mongo.connect(
//     url,
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     },
//     (err, client) => {
//       if (err) {
//         console.error(err)
//         return
//       }
//       db = client.db("TechHealth")
//       questions = db.collection("TechHealth")
     
//     }
//   )
//   })
//   


//   app.post("/questions", (req, res) => {
//     const questions = req.body.name
//     questions.insertMany()
//     if (err) {
//       console.error(err)
//       res.status(500).json({ err: err })
//       return
//     }
//     console.log(result)
//     res.status(200).json({ ok: true })
//   })


//     app.get("/questions", (req, res) => {
//     /* */
//   })

//   app.listen(3000, () => console.log("Server ready"))
