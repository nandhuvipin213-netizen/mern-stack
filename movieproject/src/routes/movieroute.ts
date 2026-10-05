import { Router } from "express";
import { addmovie,updatemovie, deletemovie, getmoviee} from "../controller/moviecontroller.js";
import { getmovieid } from "../controller/moviecontroller.js";

const router=Router()
// router.get("/movies",getmovie)
router.get("/movies",getmoviee)
router.post("/movies",addmovie)
router.get("/movies/:id",getmovieid)
router.put("/movies/:id",updatemovie)
router.delete("/movies/:id",deletemovie)


export default router
