import express from "express"
// import { CreateDocuments, GetDocuments } from "../controllers/createDocuments.js"
import { Login, Register, logout } from "../controllers/user.js"
import isAuthenticated from "../middlewares/isAuthenticated.js"

const router=express.Router()

router.post("/register",Register)
router.post("/login",Login)
router.get("/logout",logout)

export default router