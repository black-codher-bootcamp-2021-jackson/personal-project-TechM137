// const express = require("express")
// const mongo = require("mongodb").MongoClient
// const app = express()
// app.use(express.json())

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
//   app.get("/questions", (req, res) => {
//     /* */
//   })


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
