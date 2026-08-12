import { Router } from "express";
import { addmovie, deletemovie, getmovie, getmoviee, updatemovie } from "../controller/moviecontroller.js";
import { getmovieid } from "../controller/moviecontroller.js";

const router=Router()
router.get("/movies",getmovie)
router.post("/movies",addmovie)
router.get("/movies/:id",getmovieid)
router.put("/movies/:id",updatemovie)
router.delete("/movies/:id",deletemovie)
router.get("/movies",getmoviee)

export default router
