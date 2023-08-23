import express from "express";
import {config} from "dotenv";
import errorMiddleware from "./middlewares/error";
const app=express();

config({path:"./config/config.env"})

app.use(express.json());
app.use(express.urlencoded({extended:true}));


// imprting 
import user from "./routes/userRoutes"


app.use('/api/v1',user);

export default app;

app.use(errorMiddleware);