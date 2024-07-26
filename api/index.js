import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import { dot } from 'node:test/reporters';

dotenv.config();
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('Database connected')
}).catch(err =>{
    console.log(err)
});

const app =express();

app.listen(3000,()=>{
    console.log('server is running on port 3000');
})