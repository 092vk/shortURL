import mongoose from 'mongoose';

const mapiSchema= new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true,
    },
    origiId:{
        type:String,
        required:true,
    },
    visitHistory:[{timeStamps:{type:Number}}],
},{timeseries:true});

const mapi = mongoose.model('mapii',mapiSchema);

export default mapi;
