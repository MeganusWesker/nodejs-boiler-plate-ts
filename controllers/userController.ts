import { Request, Response } from 'express';
import catchAysncError from '../middlewares/catchAsyncError';

export const helloBhai=catchAysncError((req:Request,res:Response)=>{
        res.status(200).json({
            success:true,
            message:"hello bhai"
        })
})