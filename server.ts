import app from "./app";
import connectToDataBase from "./config/database";


connectToDataBase();

app.listen(process.env.PORT ,()=>{
    console.log(`Server Started on Port ${process.env.PORT}`);
})

