const Mongoose = require("mongoose");
const { Schema } = Mongoose;

const questionsSchema = new Schema({
    question: String,
    answer: Array, 
});

Mongoose.model("questions", questionsSchema);