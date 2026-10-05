import User from "../model/user.js";

let users;

export const getAllUser = async (req, res, next) => {
    try {
        users = await User.find();
    } catch (err) {
        console.log(err);

    }
    if (!users) {
        return res.status(202).json({message:"No user found"})
    }
    return res.status(200).json({users})
}

export const signup=async(req,res,next)=>{}

