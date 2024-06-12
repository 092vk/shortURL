import express from 'express';

const middleWareConfig = (app)=>{
    app.use(express.json());
};

export default middleWareConfig;
