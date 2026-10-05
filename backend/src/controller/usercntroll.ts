import user from "../model/user.js";

export const createuser=async(req:Request,res:Response)=>{
    try{
        const userData=req.body
        const user1=await user.create(userData)
        res.status(202).json({
            message:"user created",user1
        })
    }
    catch(error){
        res.status(404).json({
            mesage:"error"
        })
    }
}
export const getuser=async(req:Request,res:Response)=>{
    try{
        const use=user.find()
        res.status(202).json({
            message:"find"
        })
    }
    catch(error){
        res.status(404).json({
            message:"error"
        })
    }
}
