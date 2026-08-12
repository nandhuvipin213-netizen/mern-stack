import  express  from "express";
import {register} from "../controllers/userauth.js"
import { login } from "../controllers/userauth.js";

const router=express.Router()
router.post("/register",register)
router.post("/login",login)

export default router 
