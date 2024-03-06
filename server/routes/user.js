const express = require("express")
const router = express.Router()
const userController = require("../controllers/UserController")
router.get("/",userController.getAllUsers)
router.get("/:id",userController.getUserById)
router.post("/",userController.creatUser)
router.put("/",userController.updateUser)
router.delete("/",userController.deleteUser)
module.exports=router