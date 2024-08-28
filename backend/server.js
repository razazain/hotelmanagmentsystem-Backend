const express = require('express');
const ConnectDB = require('./config/DB')
const dotenv = require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))





app.listen(process.env.PORT,()=>{
    ConnectDB();
    console.log(`server is running on the port ${process.env.PORT}`);
})






