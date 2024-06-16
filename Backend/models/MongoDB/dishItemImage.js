const mongoose= require('mongoose');

const DishItemImageSchema=new mongoose.Schema({
    menuId:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
});

module.exports=mongoose.model('dishItemImage',DishItemImageSchema);