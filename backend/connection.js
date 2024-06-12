import mongoose from 'mongoose';

const connectDB= async()=>{
    await mongoose
    .connect("mongodb://127.0.0.1:27017/tinyURL")
    .then(()=>{
        console.log("MongoDb is Conneted");
    })
    .catch((err)=>{
        console.log("error encountered in connecting DB ", err);
    })        
};

export default connectDB;
