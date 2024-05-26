const mongoose = require("mongoose");
const db=async ()=>{

 await mongoose.connect("mongodb+srv://MahaDalaa:JK7giJcz8RFgGBeI@cluster0.dg68kbo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then( ()=> {
    console.log("connected successfully");
} ).catch( (error) => {
    console.log("error With connecting with DB",error);
})

}
module.exports = db;