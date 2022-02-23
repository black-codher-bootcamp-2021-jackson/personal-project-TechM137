const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionsSchema = new Schema({
    question: String,
    answer: Array, 
});

mongoose.model("questions", questionsSchema);