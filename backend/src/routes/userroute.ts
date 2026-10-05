import express from "express"

import { createuser,getuser } from "../controller/usercntroll.js"

const router=express.Router()

router.post("/user",createuser)
router.get("/user",getuser)

export default router