const mongoose = require('mongoose');

const userAddress= new mongoose.Schema({
    userId:{
        type: Number,
        required:true,
    },
    street: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zip: {
        type: String,
        required: true,
    },
})

module.exports=mongoose.model('userAddress', userAddress);