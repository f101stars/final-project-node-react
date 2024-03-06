const express = require("express")
const router = express.Router()
const verifyJWT=require("../middelware/verifyJWT")
const turnController = require("../controllers/turnController")

router.use(verifyJWT)
router.get("/",turnController.getAllTurns)
router.get("/:id",turnController.getTurnById)
router.post("/",turnController.creatTurn)
router.put("/",turnController.updateTurn)
router.delete("/",turnController.deleteTurn)
module.exports=router