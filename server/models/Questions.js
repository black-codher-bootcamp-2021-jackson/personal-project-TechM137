const { Mongoose } = require("mongoose");
const { Schema } = mongoose;

const questionsSchema = new Schema({
    question: String,
    answer: Array, 
});

Mongoose.model("Questions", questionsSchema);