const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const imag=require('./models/productModel')
const mongoose = require("mongoose");
const db=require('./config/db')
const productsRouter=require('./routes/productRoutes')
const _PORT = 5000;
const cors = require("cors")


const userRoutes = require('./routes/userrouter');

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000', 
  }));
app.use(express.json());
const path =  require('path');


app.use("/api/products", productsRouter);
app.use("/api/user",userRoutes)

//connect to mongo
db();

app.listen(5000,()=>{
    console.log(`Server started in port ${_PORT}`)
})

