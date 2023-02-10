import express from "express";
import { deleteUser, getAllUser, getUserByID, updateUser, updateUserPassword } from "../controllers/user.controller.js";
import { verifyAdmin, verifyUser } from "../util/verifyToken.js";
const router  = express.Router();

//UPDATE
router.put('/:id',verifyUser,updateUser)
router.put('/confirmOtp/:id/changePass',updateUserPassword)
//DELETE
router.delete('/:id',verifyUser,deleteUser)
// GET 
router.get('/confirmOtp/:id',getUserByID)
router.get('/:id',verifyUser,getUserByID)
// GET ALL
router.get('/',verifyAdmin,getAllUser)

export default router