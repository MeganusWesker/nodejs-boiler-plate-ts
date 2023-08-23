import { Request,Response,NextFunction} from "express";
import ErrorHandler from "../utils/ErrorHandler";

const error=(err:ErrorHandler,req:Request,res:Response,next:NextFunction)=>{
    err.statusCode=err.statusCode || 500;
    
    err.message= err.message || "Internal server error please try again later";

    res.status(err.statusCode).json({
        success:false,
        message:err.message
    })
}

export default error;