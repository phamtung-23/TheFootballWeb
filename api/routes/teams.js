import express from "express";
import { 
  createTeam, 
  deleteTeam, 
  getAllTeam, 
  getTeamByID, 
  updateTeam } from "../controllers/team.controller.js";

import { verifyUser } from "../util/verifyToken.js";

const router  = express.Router();

// CREATE
router.post('/',verifyUser,createTeam)
//UPDATE
router.put('/:id',verifyUser,updateTeam)
//DELETE
router.delete('/:id',verifyUser,deleteTeam)
// GET 
router.get('/:id',getTeamByID)
// GET ALL
router.get('/',getAllTeam)

export default router