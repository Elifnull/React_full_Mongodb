const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup:{
        type: String,
        minlength: 4,
    },
    punchline: {
        type: String,
        minlength: 10,
    },
}, {timestamps: true});



module.exports  = mongoose.model('Joke', JokeSchema);

