const express = require('express');
const {connectToMongo, intitalizeSQL}=require('./models/SQL');
const userAuthRoutes = require('./routes/userAuthRoutes');
const restaurentAuthRoutes = require('./routes/restaurentAuthRoutes');
const menuRoutes=require('./routes/menuRoutes');
const cors=require('cors');

require('dotenv').config();

const port=process.env.PORT || 3000;

const app=express();
app.use(cors());
app.use(express.json());

connectToMongo();
intitalizeSQL();

app.use('/api/userAuth', userAuthRoutes);
app.use('/api/restaurentAuth',restaurentAuthRoutes);
app.use('/api/menuAuth',menuRoutes);

app.listen(port, ()=>{
    console.log('Server is running on http://localhost:5000');
})