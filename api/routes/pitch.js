import express from "express";
import { 
  createPitch, 
  deletePitch, 
  getAllPitch, 
  getPitchByID, 
  updatePitch } from "../controllers/pitch.controller.js";
import { verifyUser } from "../util/verifyToken.js";

const router  = express.Router();

// CREATE
router.post('/',verifyUser,createPitch)
//UPDATE
router.put('/:id',verifyUser,updatePitch)
//DELETE
router.delete('/:id',verifyUser,deletePitch)
// GET 
router.get('/:id',getPitchByID)
// GET ALL
router.get('/',getAllPitch)

export default router