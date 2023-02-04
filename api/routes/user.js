import express from "express";
import { deleteUser, getAllUser, getUserByID, updateUser } from "../controllers/user.controller.js";
import { verifyAdmin, verifyUser } from "../util/verifyToken.js";
const router  = express.Router();

//UPDATE
router.put('/:id',verifyUser,updateUser)
//DELETE
router.delete('/:id',verifyUser,deleteUser)
// GET 
router.get('/:id',verifyUser,getUserByID)
// GET ALL
router.get('/',verifyAdmin,getAllUser)

export default router