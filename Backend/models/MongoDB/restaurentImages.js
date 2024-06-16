const mongoose = require('mongoose');

const restaurentimageSchema=new mongoose.Schema({
    restaurentId:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('restaurentImages', restaurentimageSchema);