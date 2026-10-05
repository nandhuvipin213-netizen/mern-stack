import { Router } from "express";
import { getprofile } from "../controllers/usercontroller";
import { authmiddleware } from "../middlewere/authmiddle";
// import Router from "./authroute";

const router=Router()
router.get("/get",authmiddleware,getprofile)

export default router