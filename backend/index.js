import express from 'express';
import mongoose from 'mongoose';
import connectDB from './connection.js';
import mapi from "./models/mapi.js";
import middleWareConfig from './middlewares/middlewareConfig.js';
import mapiRoute from './router/router.js';
import cors from 'cors';


const app = express();
const PORT = 8081;
app.use(cors())


//connect the db
connectDB();

//config the middlewares 
middleWareConfig(app);


app.get('/',(req,res)=>{
    res.json("hello");
});

app.use("/url",mapiRoute);

app.get('/:shortId',async(req,res)=>{
    const shortId = req.params.shortId;
    const entry = await mapi.findOneAndUpdate({
        shortId
    },{$push:{
        visitHistory:{
            timeStamp:Date.now()
        }
    }});
    res.redirect(entry.origiId);
})


app.listen(PORT,()=>console.log("the server is running on port ", PORT));

