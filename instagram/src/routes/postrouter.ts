import {Router}  from "express";
import { createpost ,getpost} from "../controllers/postcontroller.ts";
import { authmiddleware } from "../middlewere/authmiddle.ts";


const router=Router()
router.post("/",authmiddleware,createpost)
router.get("/get",authmiddleware,getpost)

export default router