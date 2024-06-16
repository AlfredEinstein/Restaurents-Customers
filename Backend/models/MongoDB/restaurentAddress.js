const mongoose = require('mongoose');

const restaurentAddress= new mongoose.Schema({
    restaurentId:{
        type:Number,
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

module.exports=mongoose.model('restaurentAddress', restaurentAddress);