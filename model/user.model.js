const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        lowercase: true
    },
    category: {
        type: String,
        required: true,
       
    },
    dificulty: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    score: {
        type: String,
        required: true
    },

},

    { timestamps: true }

)


const userModel = mongoose.model('userdata', userSchema)

module.exports = userModel