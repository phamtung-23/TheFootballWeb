import Team from "../model/Team.model.js";
// CREATE
export const createTeam = async(req, res, next) => {
  const newTeam = new Team(req.body)
  try {
    const saveTeam =await newTeam.save()
    res.status(200).json(saveTeam)
  } catch (error) {
    next(error)
  }
}
//UPDATE
export const updateTeam = async(req, res, next) => {
  try {
    const updateTeam = await Team.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    res.status(200).json(updateTeam)
  } catch (error) {
    next(error)
  }
}
//DELETE
export const deleteTeam = async(req, res, next) => {
  try {
    await Team.findByIdAndDelete(req.params.id)
    res.status(200).json("Sân bóng đã được xóa!")
  } catch (error) {
    next(error)
  }
}
// GET 
export const getTeamByID = async(req, res, next) => {
  try {
    const team = await Team.findById(req.params.id)
    res.status(200).json(team)
  } catch (error) {
    next(error)
  }
}
// GET ALL
export const getAllTeam = async(req, res, next) => {
  const {name,address,recruit, member} = req.query
  let teamAll
  try {
    if(name !== ''){
      if(address !== ''){
        if(recruit==="false"&&member==='true'){
          teamAll = await Team.find({name, address, isRecruit:recruit})
        }else if(recruit==="true"&&member==='false'){
          teamAll = await Team.find({name, address, isRecruit:recruit})
        }else {
          teamAll = await Team.find({name, address})
        }
      }else {
        if(recruit==="false"&&member==='true'){
          teamAll = await Team.find({name, isRecruit:recruit})
        }else if(recruit==="true"&&member==='false'){
          teamAll = await Team.find({name, isRecruit:recruit})
        }else {
          teamAll = await Team.find({name})
        }
      }
    }else{
      if(address !== ''){
        if(recruit==="false"&&member==='true'){
          teamAll = await Team.find({ address, isRecruit:recruit})
        }else if(recruit==="true"&&member==='false'){
          teamAll = await Team.find({ address, isRecruit:recruit})
        }else {
          teamAll = await Team.find({address})
        }
      }else{
        if(recruit==="false"&&member==='true'){
          teamAll = await Team.find({  isRecruit:recruit})
        }else if(recruit==="true"&&member==='false'){
          teamAll = await Team.find({  isRecruit:recruit})
        }else {
          teamAll = await Team.find()
        }
      }
    }
    res.status(200).json(teamAll)
  } catch (error) {
    next(error)
  }
}