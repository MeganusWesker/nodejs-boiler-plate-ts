import { Request,Response,NextFunction } from "express";


const thefunc=(passedfunc:Function)=>(req:Request,res:Response,next:NextFunction)=>{
    Promise.resolve(passedfunc(req,res,next)).catch(next);
}

export default thefunc;