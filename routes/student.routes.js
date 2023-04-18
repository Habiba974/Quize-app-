const router =require("express").Router()
const studentController=require('../app/controller/studentController')
const auth =require("../app/middel/auth")

router.post("/register",studentController.register)
router.get("/login",studentController.login)
router.get("/logout",auth,studentController.logout)
router.get("/showAccount/:id",studentController.showMyAccount)
router.patch("/editAccount/:id",studentController.editAccount)

module.exports=router