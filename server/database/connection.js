// const mongoose= require("mongoose");

// const connectDB= async()=>{
//     try{
//         //mongodb connection string
//         const con= await mongoose.connect(process.env.MONGO_URI,{
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useCreateIndex: true
//         })
//         mongoose.set('strictQuery', false);
//         console.log(`MongoDB connected : ${con.connection.host}`);
//     }catch(err){
//         console.log(err);
//         process.exit(1);
//     }
// }

// module.exports= connectDB
// import mongoose from "mongoose";
const mongoose = require("mongoose");
// const mongoose = require('mongoose');


const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // strictQuery: true
            // useFindAndModify: true,
            // useCreateIndex: true,
        })
        
        console.log(`MongoDB connected : ${con.connection.host}`);
        
    }catch(err){
        console.log(err);
        process.exit(1);
    }
    
}
`mongoose.set('strictQuery', true);`

module.exports = connectDB