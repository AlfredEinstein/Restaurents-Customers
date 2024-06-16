const mongoose= require('mongoose');
require('dotenv').config();

const connectMongoDb= async()=>{
    try{
        console.log("Connecting to MongoDB...");
        await mongoose.connect(process.env.MONGODB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    }catch(error){
        console.log(`MongoDB connection error: ${error}`);
        process.exit(1);
    }
};

module.exports=connectMongoDb;