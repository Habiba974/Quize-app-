const router =require("express").Router()
const adminController=require('../app/controller/adminController')
router.get("/showAll",adminController.showAll)
router.post("/singin",adminController.singInAdmin)
router.get("/single/:id",adminController.singleStudent)
router.delete("/deleteSingle/:id",adminController.delStudent)
router.get("/showAllExams",adminController.showAllExam)
router.patch("/editExam/:id",adminController.editExam)
router.get("/login",adminController.login)

module.exports=router