const mongoose = require('mongoose')

const questionSchema = mongoose.Schema({
    category:{
        type: String,
        required: true,
        lowercase: true
    },
    type: {
        type: String,
        required: true,
       
    },
    difficulty: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    correct_answer: {
        type: String,
        required: true
    },
    incorrect_answers:{
        type: Array,
        required: true
    }

},

    { timestamps: true }

)


const questionModel = mongoose.model('question', questionSchema)

module.exports = questionModel